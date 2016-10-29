
function formView(req, res) {
    
     res.render('form', { title:'Form'}); //refrenced in form jade 
}

function formPost(req, res) {
    
    if (req.method === 'POST') {
       res.render('form', { 
            name: req.body.name,
            email: req.body.email,
            comment: req.body.comment
            
        });       
    } else {
         res.render('form', { 
            name: 'not found',
            email: 'not found',
            comment: 'not found'
            
        });
    }   
}

/* Set the module class to have functions available for other files. */
module.exports.formView = formView;
module.exports.formPost = formPost;

