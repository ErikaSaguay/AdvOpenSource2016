
var request = require('request');



module.exports.homePage = function(req, res) {
        
    var requestOptions = {
          url : 'http://localhost:3001/api/v1/employees',
          method : "GET",
          json : {},// what i will use to send the data over if i were using a method post or if you were doing a post
          qs : {} // query string this can be helpful based on the api request for example finds location based on zip 
        };
        
  request( requestOptions, function(err, response, body) { // body is the conent we cant to pass 
      var results = [];
      if (response.statusCode === 200 && body.length) {
        results = (body instanceof Array) ? body : [];        
      }
      
      console.log(results);
      console.log(body);
      
      res.render('index', {
            title: 'Home Page',
            results: results
        });
      
    }
  );
    
   // var alldata = my vlass.GETaLLdATE();
   //SENDJosonResponsse (stats, kjsf, ajshd);
};
module.exports.formPage = function(req, res) {
        
    var requestOptions = {
          url : 'http://localhost:3001/api/v1/employees',
          method : "GET",
          json : {},// what i will use to send the data over if i were using a method post or if you were doing a post
          qs : {} // query string this can be helpful based on the api request for example finds location based on zip 
        };
        
  request( requestOptions, function(err, response, body) { // body is the conent we cant to pass 
      var results = [];
      if (response.statusCode === 200 && body.length) {
        results = (body instanceof Array) ? body : [];        
      }
      console.log(results);
      console.log(body);
      res.render('index', {
            title: 'Home Page',
            results: results
        });
      
    }
  );
    
   // var alldata = my vlass.GETaLLdATE();
   //SENDJosonResponsse (stats, kjsf, ajshd);
};