const express = require('express')
const socketio = require('socket.io')
const router = require('./router')
const http = require('http')
const cors = require('cors')
const { addUser, removeUser, getUser, getUsersInRoom } = require('./userHelper')

////////////////////////
//SERVER CODE
////////////////////////

//set up server port
const PORT = process.env.PORT || 8080

const app = express()
const server = http.createServer(app)

app.use(router)
app.use(cors())

/////////////////////////
//SOCKET.IO
/////////////////////////
const io = socketio(server)

//Run when a client connects - comes with a socket argument which has some unique user info
io.on('connect', (socket) => {
  //listen for incoming sockets with the 'join' event and receive the data that was sent with it
  socket.on('join', ({ name, room }, callback) => {
    //destructure what comes back from the helper function
    const { error, user } = addUser({ id: socket.id, name, room })

    //error handling
    if (error) return callback(error)

    //send user a welcome message from the backend
    socket.emit('message', {
      user: 'admin',
      text: `${user.name}, welcome to the ${user.room} room!`,
    })
    //send a message to everyone else in user's room except to the user itself
    socket.broadcast.to(user.room).emit('message', {
      user: 'admin',
      text: `${user.name} just joined, say hi to them!`,
    })
    //if user was successfully added, join the room requested
    socket.join(user.room)

    //show data on users in the room
    io.to(user.room).emit('roomData', {
      room: user.room,
      users: getUsersInRoom(user.room),
    })
  })

  //listen for sockets with 'sendMessage' events
  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id)
    io.to(user.room).emit('message', { user: user.name, text: message })

    callback()
  })

  socket.on('disconnect', () => {
    const user = removeUser(socket.id)
    if (user) {
      io.to(user.room).emit('message', {
        user: 'admin',
        text: `${user.name} left us :(`,
      })
      io.to(user.room).emit('roomData', {
        room: user.room,
        users: getUsersInRoom(user.room),
      })
    }
  })
})

console.log('listening on ' + PORT)
server.listen(PORT)
