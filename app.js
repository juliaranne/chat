const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('build'))

app.get('/', (req, res) => {
  res.render('index')
});

const server = app.listen(3000)

const io = require("socket.io")(server)

io.on('connection', (socket) => {
  console.log("New user connected")

  socket.username = "Anonymous"
  console.log(socket.username)

  socket.on('update_username', (data) => {
    socket.username = data.username
  })

  // socket.on('new_message', (data) => {
  //   io.sockets.emit('here_message', {message: data.message, username: socket.username});
  // })
})