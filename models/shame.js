var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var format = require('util').format;
var db_host = "127.0.0.1";

function Shame(){
  this.ready = false;
  this.db = null;
  this.init();
}

Shame.prototype.init = function() {
  var self = this;
  Db.connect(format("mongodb://%s:%s/shmly?w=1", db_host , Connection.DEFAULT_PORT),function(err,db){
    if(err){
      console.log('ERROR CONNECTING TO DATABASE');
    }
    self.db = db;
    self.ready = true;
  });
};

Shame.prototype.getTweet = function(cb){
  var col = this.db.collection('tweets');
  var cursor = col.find({}).sort({_id:-1}).limit(8);
  cursor.toArray(function(err, result){
    cb(err, result);
  });
};

module.exports = new Shame();