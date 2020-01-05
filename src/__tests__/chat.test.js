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
  
  const fakeURL = 'ws://localhost:8080';
  const mockServer = new Server(fakeURL);

  window.io = SocketIO;

  mockServer.on('connection', socket => {
    socket.on('new_message', data => {
      socket.emit('here_message', {message: 'Test message', username: 'Julia'});
    });
  });
  
  const chatapp = require('../chat');

  setTimeout(() => {
    // t.is(app.messages.length, 1);
    // t.is(app.messages[0], 'test message from mock server', 'we have subbed our websocket backend');

    mockServer.stop(t.done);
  }, 100);
  expect('Julia').toBeInTheDocument();
  done();

  // mockIo.emit('new_message', {message: 'Test message'});
  // expect('Test message').toBeInDocument();
});
