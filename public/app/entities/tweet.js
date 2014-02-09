var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

// Model and Collection definition
var TweetModel = Backbone.Model.extend({
  idAttribute: "_id"
});

var TweetCollection = Backbone.Collection.extend({
  model: TweetModel,
  url : '/api/tweets'
});

// Controller Definition
var TweetController = Marionette.Controller.extend({
  initialize: function(options){
    this.collection = new TweetCollection();
    this.collection.fetch();
    setInterval( function() {
        this.collection.fetch();
    }.bind(this),10000);
  },

  getTweets : function(){
    return this.collection;
  }
});

module.exports = {
  TweetModel : TweetModel,
  TweetCollection : TweetCollection,
  TweetController : TweetController
};