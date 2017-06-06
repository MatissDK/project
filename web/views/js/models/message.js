var Backbone = require('backbone');

var Message = Backbone.Model.extend({
  defaults: {
    Title : 'default',
    Status: 'done'
  }

});

module.exports = Message;