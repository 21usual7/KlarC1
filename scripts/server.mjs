import { createServer } from 'node:http';
import { randomBytes } from 'node:crypto';
import { parseArgs } from 'node:util';
import next from 'next';
import { connectionIp, signClientIp } from '../src/lib/client-ip.ts';

const { values } = parseArgs({ options: {
  dev: { type: 'boolean', default: false },
  port: { type: 'string', short: 'p', default: process.env.PORT || '3000' },
  hostname: { type: 'string', short: 'H', default: '0.0.0.0' },
} });
const port = Number(values.port);
if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('Invalid port');
process.env.KLAR_INTERNAL_IP_SECRET = randomBytes(32).toString('hex');
const app = next({ dev: values.dev, hostname: values.hostname, port });
const handle = app.getRequestHandler();
await app.prepare();
const server = createServer((req, res) => {
  const forwarded = req.headers['x-forwarded-for'];
  const ip = connectionIp(req.socket.remoteAddress, typeof forwarded === 'string' ? forwarded : undefined, process.env.AI_TRUSTED_PROXY_IPS);
  delete req.headers['x-klar-client-ip'];
  delete req.headers['x-klar-client-ip-signature'];
  if (ip) {
    req.headers['x-klar-client-ip'] = ip;
    req.headers['x-klar-client-ip-signature'] = signClientIp(ip, process.env.KLAR_INTERNAL_IP_SECRET);
  }
  handle(req, res);
});
server.on('upgrade', app.getUpgradeHandler());
server.listen(port, values.hostname, () => console.log(`Jargeo ready at http://localhost:${port}`));
