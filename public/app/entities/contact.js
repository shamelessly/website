var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

// Model and Collection definition
var ContactModel = Backbone.Model.extend({
  idAttribute: "_id",
  // Default attributes
  defaults: {
    _id : 1,
    name : 'New Contact'
  },

  // A dummy initialization method
  initialize: function() {
    this.on('change', function(){
      console.log('ContactModel - Values for this model have changed.');
    });
  }
});

var ContactCollection = Backbone.Collection.extend({
  model: ContactModel,
  url : '/api/contact'
});

// Controller Definition
var ContactController = Marionette.Controller.extend({
  initialize: function(options){
    this.collection = new ContactCollection();
    
    setTimeout( function() {
        this.collection.fetch();
        console.log('fetching');
    },
      1000);
  },

  getContacts : function(){
    return this.collection;
  },

  addContact : function(name){
    var contact = new ContactModel({name:name});
    this.collection.add(contact);
    return contact;
  }
});

module.exports = {
  ContactModel : ContactModel,
  ContactCollection : ContactCollection,
  ContactController : ContactController
};