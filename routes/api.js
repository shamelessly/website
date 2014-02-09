data = require('../data/dummy');

function getDummy(req, res, next){
  res.json(data);
}

module.exports = {
	getDummy : getDummy
};