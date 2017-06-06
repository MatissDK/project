var Backbone = require('backbone');
var MessageView = require('./messageview');


var MessagesView =  Backbone.View.extend({
  initialize: function (opts) {
    this.listenTo(opts.collection, 'add', this.messageAdded)
  },

  messageAdded: function (message) {
    var view = new MessageView({model: message});
    view.render().$el.appendTo(this.$el);
  }
});

module.exports = MessagesView;

