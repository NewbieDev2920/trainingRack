let http = require('node:http');
let fs = require('node:fs');
let url = require('node:url');
const { error } = require('node:console');

console.log('Initializing server...');

const ADRESS = 'localhost';
const PORT = 8080;

const server = http.createServer(handleRequests);

console.log(`

 -------------------------------------
 |TRAINING RACK SERVER
 -------------------------------------
 | ADRESS: ${ADRESS}
 | PORT: ${PORT}
 |
 | LISTENING FOR REQUESTS...
`);

server.listen(8080);

function handleRequests(req, res){
    try {
        let petitionUrl = url.parse(req.url, true);
        res.writeHead(200, {'Content-Type':'text/html'});
        if(petitionUrl.pathname == '/home' || petitionUrl.pathname == '/'){
            res.write('<h1>welcome to our home</h1>'+req.url);
        }else if(petitionUrl.pathname == '/auth'){
            res.write('signup or login\n'+req.url);
        }else if(petitionUrl.pathname == '/workout'){
            res.write('your training section\n'+req.url);
        }else if(petitionUrl.pathname == '/logworkout'){
            res.write('log your workout\n'+req.url);
        }else if(petitionUrl.pathname == '/browser'){
            res.write('browse excercises and techniques!\n'+req.url);
        }else{
            throw error;
        }
        res.end();
    } catch (error) {
        console.error(error);
        res.write(req.url+" page doesn't exists 404");
    }
}