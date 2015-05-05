var express = require('express');
var router = express.Router();
var path = require('path');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_walking_skeleton');

var Cat = mongoose.model('Cat', {name:String});


router.get('/', function(req, res, next){
    console.log("Here is a console log");
    var file  = req.params[0] || 'views.index.html';
    res.sendFile(path.join(_))
    next();
});

module.exports = router;