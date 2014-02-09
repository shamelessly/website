var tweet = require('./tweet');

function EntitiesModule(Entities, App, Backbone, Marionette, $, _){

  var tweetController = new tweet.TweetController();

  App.reqres.setHandler('tweet:entities', function(){
    return tweetController.getTweets();
  });

}

module.exports = EntitiesModule;