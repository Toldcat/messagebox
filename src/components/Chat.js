import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import ChatHeader from './ChatHeader'
import Input from './Input'
import MessageBox from './MessageBox'
import UserList from './UserList'

let socket

const Chat = ({ location }) => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [roomData, setRoomData] = useState([])
  const ENDPOINT = 'localhost:8080'

  useEffect(() => {
    //destructure the query string
    const { name, room } = queryString.parse(location.search)

    //initialise a socket.io connection
    socket = io(ENDPOINT)

    //set the user's name and room
    setName(name)
    setRoom(room)

    //send the data to the backend as identified by the string name
    socket.emit('join', { name, room })

    //disconnect upon unmounting
    return () => {
      socket.emit('disconnect')
      socket.off()
    }
  }, [ENDPOINT, location.search])

  //2nd use effect for handling incoming messages from the backend
  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message])
    })
  }, [messages])

  //useEffect for handling room data info
  useEffect(() => {
    socket.on('roomData', ({ users }) => {
      setRoomData(users)
    })
  }, [])

  const sendMessage = (e) => {
    e.preventDefault()

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }

  return (
    <div className='chat'>
      <div className='chat__container'>
        <ChatHeader roomName={room} />
        <div className='chat__group--left'>
          <UserList roomData={roomData} />
          <div className='chat__group--right'>
            <MessageBox messages={messages} name={name} />
            <Input
              message={message}
              setMessage={setMessage}
              sendMessage={sendMessage}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
