var views = require('../view');
var _ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var Controller = Marionette.Controller.extend({
  initialize: function(options){
    this.region = options.region;
    this.app = options.app;
  }
});

Controller.prototype.displayTweets = function() {
	var tweets = this.app.request("tweet:entities");
  var view = new views.TweetCollectionView({collection:tweets});
  this.region.show(view);
};

module.exports = Controller;