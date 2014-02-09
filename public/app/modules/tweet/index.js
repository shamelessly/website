var Controller = require('./controller');

function TweetModule(module, app, backbone, Marionette, $, _){
  module.on("before:start", function(){
    console.log('Tweet module will start');
  });

  module.Router = Marionette.AppRouter.extend({
    appRoutes: {
      "": "displayTweets"
    }
  });

  module.addInitializer(function(){
    new module.Router({
      controller : new Controller({
        region: app.mainRegion,
        app : app
      })
    });
  });
}

module.exports = TweetModule;