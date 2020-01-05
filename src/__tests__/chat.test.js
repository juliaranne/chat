import { SocketIO, Server } from 'mock-socket';
// const io = require('socket.io');

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

test('Username value is Annonymous', done => {
  
  // const fakeURL = 'ws://localhost:8080';
  // const mockServer = new Server(fakeURL);
  // window.io = SocketIO;
  
  const chatapp = require('../chat');

  const usernameButton = document.querySelector('#send_username');
  usernameButton.click();

  expect(chatapp.updateUserName).toBeCalled();
  done();
  

  // mockIo.emit('new_message', {message: 'Test message'});
  // expect('Test message').toBeInDocument();
});
