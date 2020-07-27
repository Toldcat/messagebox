import React from 'react'

//message is an object that contains user & text key value pairs
const Message = ({ message, name }) => {
  let isSentByMe = false

  if (message.user.toLowerCase() === name.toLowerCase()) {
    isSentByMe = true
  }

  return (
    <div className='message'>
      {isSentByMe ? (
        <div className='message__own'>
          <p className='message__user'>{message.user}</p>
          <p className='message__text'>{message.text}</p>
        </div>
      ) : (
        <div className='message__other'>
          <p className='message__user'>{message.user}</p>
          <p className='message__text'>{message.text}</p>
        </div>
      )}
    </div>
  )
}

export default Message
