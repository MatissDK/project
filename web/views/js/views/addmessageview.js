var Backbone = require('backbone');
var Message = require('./../models/message');

var AddMessageView = Backbone.View.extend({
  events: {
    'submit form' : 'addMessage'
  },

  initialize: function(opts) {
    this.collection = opts.collection;
  },

  getAttributes: function() {
    return {
      'title': this.$('#message').val()
    }
  },

  addMessage: function (ev) {
    ev.preventDefault();

    var message = new Message(this.getAttributes());

    this.collection.add(message);

    this.$('#message').val('');
  }
});

module.exports = AddMessageView;