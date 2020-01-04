import { SocketIO, Server } from 'mock-socket';
const io = require('socket.io');
import { updateUserName } from '../chat';

jest.mock('socket.io', () => {
  const mSocket = {
    on: jest.fn()
  };
  return jest.fn(() => mSocket);
});

test('Username value is Annonymous', () => {
  
  const fakeURL = 'ws://localhost:8080';
  const mockServer = new Server(fakeURL);
  window.io = SocketIO;

  // document.body.innerHTML =
  //   '<form id="create_message">' +
  //   ' <input id="message" type="text" />' +
  //   ' <button id="send_message">Send</button>' +
  //   '</form>';

  // mockIo.emit('new_message', {message: 'Test message'});
  // expect('Test message').toBeInDocument();
});
