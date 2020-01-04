"use strict";

var _mockSocket = require("mock-socket");

var _chat = require("../chat");

const io = require('socket.io');

jest.mock('socket.io', () => {
  const mSocket = {
    on: jest.fn()
  };
  return jest.fn(() => mSocket);
});
test('Username value is Annonymous', () => {
  const fakeURL = 'ws://localhost:8080';
  const mockServer = new _mockSocket.Server(fakeURL);
  window.io = _mockSocket.SocketIO; // document.body.innerHTML =
  //   '<form id="create_message">' +
  //   ' <input id="message" type="text" />' +
  //   ' <button id="send_message">Send</button>' +
  //   '</form>';
  // mockIo.emit('new_message', {message: 'Test message'});
  // expect('Test message').toBeInDocument();
});