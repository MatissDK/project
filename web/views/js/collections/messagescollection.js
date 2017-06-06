var Backbone = require('backbone');
var Message = require('./../models/message');

var MessagesCollection = Backbone.Collection.extend({
  model: Message,
  url: 'http://localhost:4000/todo'
});

module.exports = MessagesCollection