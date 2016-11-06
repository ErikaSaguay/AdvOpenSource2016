var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    department: String,
    startdate: {
        type: Date
    },
    jobtitle: String,
    salary: String
});


var Review = mongoose.model('Employees', reviewSchema);

module.exports = Review;