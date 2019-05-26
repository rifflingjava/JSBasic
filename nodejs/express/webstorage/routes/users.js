var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	 res.header("Cache-Control", "no-cache, no-store, must-revalidate");
	    res.header("Pragma", "no-cache");
	    res.header("Expires", 0);
  res.send('respond with a resosdfurce');
});
router.get('/:language/:page', function(req, res, next) {
	  res.setHeader('Access-Control-Max-Age', 6)
	  
	      var language = req.params.language;
	  res.send('respond with a resosdfurce '+language);
});

router.post('/', addUser);
function addUser(req, res, next) {
	  res.setHeader('Access-Control-Max-Age', 6)
	  res.setHeader("Content-type","application/json")
	  var language = req.params.language;
	  var userText = '{ "sites" : [' +
	  '{ "name":"Runoob" , "url":"www.runoob.com" },' +
	  '{ "name":"Google" , "url":"www.google.com" },' +
	  '{ "name":"Taobao" , "url":"www.taobao.com" } ]}';
	
	  userObject = JSON.parse(userText);
	  
	  res.send(userText);
};

module.exports = router;
