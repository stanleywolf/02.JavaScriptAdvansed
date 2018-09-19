class Request{
    constructor(method,uri,version,message){
        [this.method,this.uri,this.version,this.message,
            this.response,this.fulfilled] =
            [method,uri,version,message,undefined,false];
    }
}
let req = new Request('GET','https://stancho.com','HTTP/1.1','bla');
console.log(req);
req.response = 'Yes';
console.log(req);
req.fulfilled = true;
req.method = 'SET';
console.log(req);