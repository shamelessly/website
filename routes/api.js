var shame = require('../models/shame');

function getTweet(req, res, next){
	shame.getTweet(function(err, result){
		res.json(result);
	});
}

module.exports = {
	getTweet : getTweet
};