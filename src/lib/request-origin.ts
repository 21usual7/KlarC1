export function isSameOriginRequest(request:Request,configuredOrigin?:string){
 if(request.headers.get('sec-fetch-site')==='cross-site')return false;
 const origin=request.headers.get('origin');if(!origin)return true;
 try{
  const url=new URL(request.url);
  const expected=configuredOrigin?new URL(configuredOrigin).origin:`${url.protocol}//${request.headers.get('host')||url.host}`;
  return new URL(origin).origin===expected;
 }catch{return false;}
}
