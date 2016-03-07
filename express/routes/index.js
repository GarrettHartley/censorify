var express = require('express');
var router = express.Router();
var fs = require("fs");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getcity',function(req,res){
	console.log("In GetCity")
//	console.log(req.query)

	var myRe = new RegExp("^"+req.query.q);
//	console.log(myRe);
	
	 fs.readFile(__dirname + '/cities.dat.txt',function(err,data) {
            if(err) throw err;
	var jsonresult = [];
	var cities = data.toString().split('\n')
        for(var i = 0; i < cities.length; i++) {
          var result = cities[i].search(myRe); 
          if(result != -1) {
  //         console.log(cities[i]);
           jsonresult.push({city:cities[i]});
          } 
        }   
res.status(200).json(jsonresult);          
});
});

router.get('/getword',function(req,res){
	console.log("In Getword")
	console.log(req.query)

	var myRe = new RegExp("^"+req.query.q);
	console.log(myRe);
	
	 fs.readFile(__dirname + '/words.dat.txt',function(err,data) {
            if(err) throw err;
	var jsonresult = [];
	var words = data.toString().split('\n')
        for(var i = 0; i < words.length; i++) {
          var result = words[i].search(myRe); 
          if(result != -1) {
           console.log(words[i]);
           jsonresult.push({word:words[i]});
          } 
        }   
res.status(200).json(jsonresult);          
});
});



module.exports = router;
