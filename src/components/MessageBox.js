import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from './Message'

const MessageBox = ({ messages, name }) => {
  return (
    <ScrollToBottom>
      {messages.map((message, index) => (
        <div key={index}>
          <Message name={name} message={message} />
        </div>
      ))}
    </ScrollToBottom>
  )
}

export default MessageBox
