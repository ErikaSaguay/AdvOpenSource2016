/* GET 'home info' page */

var Review = require('../models/review');

module.exports.home = function(req, res){
    
    var msg = '';
    function successCB(){
         res.render('index', { 
            title: 'home',
            message : 'Review Saved'
        });        
    }
    if (req.method === 'POST') {
        console.log(req.body);
        
        Review.create({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          department: req.body.department,
          startdate: req.body.startdate,
          jobtitle: req.body.jobtitle,
          salary: req.body.salary
        },function (err) {           
           // saved!
           successCB();
        });
              
    } else {
         res.render('index', { 
            title: 'home',
            message : msg
        });
    }   
    
 
};

module.exports.view = function(req, res){
    
     var id = req.params.id,
         removed = '';
 
    function finish() {     
       Review
       .find()
       .exec(function(err, results){

               res.render('view', { 
                   title: 'View Results',
                   results : results,
                   removed : removed
               });
       });
    }
    
     if ( id ) {
         
         var removePromise = new Promise(
            function (resolve, reject) { 
                
                Review.remove({ _id: id }, function (err) {
                   if (!err) {
                        resolve(' has been removed'); // success
                    } else {
                        reject(' has not been removed'); // failure
                    }
               });                
                
            });
         
         
             removePromise.then(function(result) {
                 removed = id + result;
                 finish(); 
             }, function(result) {
                 removed = id + result;
                 finish();  
             });
           
                
     } else {
      finish();
    }
     
     
    
};



module.exports.update = function(req, res){
    
    var id = req.params.id;
    var msg = '';
    if (req.method === 'POST') {
         
         id = req.body._id;
         var query = { '_id': req.body._id };
         var update = {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          department: req.body.department,
          startdate: req.body.startdate,
          jobtitle: req.body.jobtitle,
          salary: req.body.salary
        };
        var options = {};
        var callback = function(){};
        Review.update(query, update, options, callback);
        msg = 'data has been updated';
     }
    
    
    Review
    .findOne({ '_id': id })
    .exec(function(err, results){
    
         if ( results ) {
            res.render('update', { 
                title: 'Update Results',
                message: msg,
                results : results
            });
        } else {
             res.render('notfound', { 
                message: 'Sorry ID not found'
            });
        }
           
    });
};


