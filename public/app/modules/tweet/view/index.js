var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var TweetView = Backbone.Marionette.ItemView.extend({
  tagName : 'div',
  template: "#tweet-template",

  initialize: function(){
    // bind the model change to rerender this view
    this.model.on('change', this.render, this);
  },
});

var TweetCollectionView = Backbone.Marionette.CollectionView.extend({
  tagName : 'div',
  itemView : TweetView,
});

module.exports = {
  TweetView : TweetView,
  TweetCollectionView : TweetCollectionView
};