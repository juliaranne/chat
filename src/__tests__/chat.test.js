import {
  getByLabelText,
  getByText,
  wait,
  fireEvent,
  screen
} from '@testing-library/dom';
import { SocketIO, Server } from 'mock-socket';

jest.mock('../chat');

// jest.mock('socket.io', () => {
//   const mSocket = {
//     on: jest.fn()
//   };
//   return jest.fn(() => mSocket);
// });

beforeEach(() => {
  document.body.innerHTML =
    '<form id="change_username">' +
    ' <input id="username" type="text" />' +
    ' <button id="send_username">Choose username</button>' +
    '</form>' +
    '<section id="chat"></section>' +
    '<form id="create_message">' +
    ' <input id="message" type="text" />' +
    ' <button id="send_message">Send</button>' +
    '</form>';
});

test('Username value is Annonymous', () => {
  
  const chatapp = require('../chat');
  const sendMessageButton = document.querySelector('#send_username');
  sendMessageButton.addEventListener('click', () => {
    chatapp.updateUserName()
  }) 

  fireEvent.click(sendMessageButton);
  expect(chatapp.updateUserName).toHaveBeenCalled();
});

test.only('Emits message', () => {
  const fakeURL = 'ws://localhost:8080';
  const mockServer = new Server(fakeURL);

  window.io = SocketIO;

  mockServer.on('connection', socket => {
    socket.on('new_message', data => {
      socket.emit('here_message', {message: 'Test message', username: 'Julia'});
    });
  });

  const chatapp = require('../chat');
  const sendMessageButton = document.querySelector('#send_message');
  const msgInput = document.querySelector('#message');

  fireEvent.change(msgInput, { target: { value: 'Test message' } })
  sendMessageButton.addEventListener('click', () => {
    chatapp.sendMessage()
  })

  fireEvent.click(sendMessageButton);

  // mockIo.emit('new_message', {message: 'Test message'});
  screen.getByText('Test message');
})
