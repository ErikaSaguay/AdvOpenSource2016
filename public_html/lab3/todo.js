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
    function callback(err, data) {
        if (err) {
            console.error(err);
            /* Send the HTTP header 
             * HTTP Status: 400 : NOT FOUND
             * Content Type: text/html 
             */
            response.writeHead(404, {'Content-Type': 'text/html'});   
            response.write('<!DOCTYPE html><html><body><div>Page Not Found</div></body></html>');
        } else {
            /* Send the HTTP header 
             * HTTP Status: 200 : OK
             * Content Type: text/html 
             */
            response.writeHead(200, {'Content-Type': 'text/html'}); 
            response.write(data.toString());
        }     
        
        /* the response is complete */
        response.end();
    }

   
}).listen(3000);


// Console will print the message
console.log('Server running at http://localhost:3000/index');

