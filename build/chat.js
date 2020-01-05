"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUserName = void 0;

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000');
const message = document.getElementById('create_message');
const messageText = document.getElementById('message');
const username = document.getElementById('username');
const send_message = document.getElementById('send_message');
const send_username = document.getElementById('change_username');
const chat = document.getElementById('chat');

const updateUserName = event => {
  event.preventDefault();
  socket.emit('update_username', {
    username: username.value
  });
};

exports.updateUserName = updateUserName;

const sendMessage = event => {
  event.preventDefault();
  socket.emit('new_message', {
    message: messageText.value
  });
};

message.addEventListener('submit', event => {
  sendMessage(event);
});
send_username.addEventListener('submit', event => {
  updateUserName(event);
});
socket.on('here_message', data => {
  chat.insertAdjacentHTML('beforeend', '<p class="message">' + data.username + ": " + data.message + "</p>");
});