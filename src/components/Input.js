import React from 'react'

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <form>
      <input
        type='text'
        placeholder='Type your message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
      />
      <button onClick={(e) => sendMessage(e)}>Send</button>
    </form>
  )
}

export default Input
