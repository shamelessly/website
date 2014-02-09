var shame = require('../models/shame');

function getTweet(req, res, next){
  // Disable caching for content files
  res.header("Cache-Control", "no-cache, no-store, must-revalidate");
  res.header("Pragma", "no-cache");
  res.header("Expires", 0);
	shame.getTweet(function(err, result){
		res.json(result);
	});
}

module.exports = {
	getTweet : getTweet
};