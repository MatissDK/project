var Backbone = require('backbone');

var MessageView = Backbone.View.extend({
  tagName: 'li',

  render: function() {
    this.$el.text(this.model.get('Title'));
    return this;
  }
});

module.exports = MessageView;