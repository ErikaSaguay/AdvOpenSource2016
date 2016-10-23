/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var http = require('http');
var url = require('url');
var fileSystem = require('fs');

http.createServer(function (request, response) {
    
    var pathName = url.parse(request.url).pathname;
    var fileName = pathName.substr(1); /* lets remove the "/" from the name */

    /* lets try to read the html page found */
   // fileSystem.readFile(fileName , callback);
   
    if ( fileName  === 'index' ) {
            // fileName is equal to index so lets add ".html" to it
        fileName += '.html';
        fileSystem.readFile(fileName , callbackHTML);
    } else if ( fileName  === 'todo' ) {
            // fileName is equal to todo so lets add ".json" to it
        fileName += '.json';
        fileSystem.readFile(fileName , callbackJSON);
    }
    
    function callbackHTML( err, data){
        if(err){
            response.writeHead(400, {'Content-Type': 'text/html'});
            response.write('<!DOCTYPE html><html><body><div>Page Not Found</div></body></html>');
        }else{
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data.toString());
        }
        response.end();
    }
    function callbackJSON( err, data){
        if(err){
            response.writeHead(400, {'Content-Type': 'text/html'});
            response.write('<!DOCTYPE html><html><body><div>Page Not Found</div></body></html>');
        }else{
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.write(data.toString());
        }
        response.end();
        
    }

}).listen(3000);

// Console will print the message
console.log('Server running at http://localhost:3000/index.html');

