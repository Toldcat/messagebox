import React from 'react'

//message is an object that contains user & text key value pairs
const Message = ({ message, name }) => {
  let isSentByMe = false

  if (message.user === name) {
    isSentByMe = true
  }

  return (
    //differentiate between own messages and other people's messages for styling purposes
    isSentByMe ? (
      <div>
        <p>{message.user}</p>
        <p>{message.text}</p>
      </div>
    ) : (
      <div>
        <p>{message.user}</p>
        <p>{message.text}</p>
      </div>
    )
  )
}

export default Message
