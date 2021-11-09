// Array to store messages
var messages = [];

// Message Type lookup object. Similar to enum.
var messageType = {
  out: 'out-message',
  in: 'in-message',
  unknown: 'unknown-message'
};

// Message constructor function.
function Message(type, user, message) {
  this.type = type;
  this.user = user;
  this.message = message;
}

// Function to create and return an element for the supplied message.
function createMessageElement(message) {
  // Create text element for the message
  // var messageText = document.createTextNode(
  //   message.user + ': ' + message.message
  // );

  // *** Test code 
    var nameEl = document.createElement('span');
    nameEl.className = 'user-name';
    nameEl.textContent = message.user;

    var messageEl = document.createTextNode(': ' + message.message);
  // ***

  // Create the element and add the message text.
  var messageContainerEl = document.createElement('div');
  // messageEl.appendChild(messageText);
  messageContainerEl.appendChild(nameEl);
  messageContainerEl.appendChild(messageEl);

  // Add a class using the message type.
  messageContainerEl.className = message.type;

  return messageContainerEl;
}

// Button click event handler to add a new message
function addMessageHandler(e) {
  var user, type;
  var messageInput = document.getElementById('message-input');
  var messageContainerEl = document.getElementById('message-container');

  // Determine message type and set message variables accordingly.
  switch (e.target.id) {
    case 'send-button':
      user = 'Mike';
      type = messageType.out;
      break;
    case 'reply-button':
      user = 'Joe';
      type = messageType.in;
      break;
    default:
      user = 'unknown';
      type = messageType.unknown;
      break;
  }

  if (messageInput.value !== '') {
    // Construct a message and add it to the array.
    var message = new Message(type, user, messageInput.value);
    messages.push(message);

    // Create a message element.
    var el = createMessageElement(message);

    // Add the message element to the DOM.
    messageContainerEl.appendChild(el);

    // Reset input.
    messageInput.value = '';
  }
}

var init = function() {
  // Wire event handlers
  document.getElementById('send-button').onclick = addMessageHandler;
  document.getElementById('reply-button').onclick = addMessageHandler;
};

init();
