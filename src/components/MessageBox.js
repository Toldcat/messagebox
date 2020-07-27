import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from './Message'

const MessageBox = ({ messages, name }) => {
  return (
    <ScrollToBottom className='messagebox'>
      {messages.map((message, index) => (
        <Message name={name} message={message} key={index} />
      ))}
    </ScrollToBottom>
  )
}

export default MessageBox
