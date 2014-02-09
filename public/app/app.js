var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var MainApp = new Backbone.Marionette.Application();

// Modules
MainApp.module('Entities', require('./entities'));
// MainApp.module('Contacts', require('./modules/contacts'));
MainApp.module('Tweet', require('./modules/tweet'));


MainApp.addRegions({
  mainRegion: "#shame-containers"
});

MainApp.on('initialize:after', function(){
  Backbone.history.start();
});

MainApp.start();

module.exports = MainApp;