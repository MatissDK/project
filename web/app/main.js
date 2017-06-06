var AddMessageView = require('./views/addmessageview');
var MessagesView = require('./views/messagesview');
var MessagesCollection = require('./collections/messagescollection');
var $ = require('jquery');
var _ = require('underscore');

// window._ = _;
// window.$ = $;

var messages = new MessagesCollection();
messages.fetch();

new AddMessageView({collection: messages}).setElement('#add-message');
new MessagesView({collection: messages}).setElement('#todos');