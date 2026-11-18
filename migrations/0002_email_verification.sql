ALTER TABLE users ADD COLUMN email_verified_at TEXT;
CREATE TABLE IF NOT EXISTS email_verifications (
 token_hash TEXT PRIMARY KEY,
 user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
 expires_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS email_verifications_user ON email_verifications(user_id);
CREATE INDEX IF NOT EXISTS email_verifications_expiry ON email_verifications(expires_at);
CREATE TABLE IF NOT EXISTS email_send_limits (
 user_id TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
 next_send_at INTEGER NOT NULL, window_start INTEGER NOT NULL, send_count INTEGER NOT NULL
);
