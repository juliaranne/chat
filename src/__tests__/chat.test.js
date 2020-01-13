import {
  getByLabelText,
  getByText,
  wait,
  fireEvent,
} from '@testing-library/dom';
import mockio, {serverSocket, cleanUp } from './__mocks__/mockClientSocket.io';

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

test('Username value is Annonymous', async () => {
  
  const fakeURL = 'ws://localhost:8080';
  const mockServer = new Server(fakeURL);

  // window.io = SocketIO;

  // mockServer.on('connection', socket => {
  //   socket.on('new_message', data => {
  //     socket.emit('here_message', {message: 'Test message', username: 'Julia'});
  //   });
  // });
  
  const chatapp = require('../chat');
  const sendMessageButton = document.querySelector('#send_username');
  sendMessageButton.addEventListener('click', () => {
    chatapp.updateUserName.mockImplementationOnce()
  }) 

  fireEvent.click(sendMessageButton);
  await wait();
  expect(chatapp.updateUserName).toHaveBeenCalled();

  // mockIo.emit('new_message', {message: 'Test message'});
  // expect('Test message').toBeInDocument();
});
