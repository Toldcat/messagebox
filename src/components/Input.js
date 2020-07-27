import React from 'react'

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <form className='inputform'>
      <input
        className='inputform__input'
        type='text'
        placeholder='Say something...'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
      />
      <button className='inputform__button' onClick={(e) => sendMessage(e)}>
        Send
      </button>
    </form>
  )
}

export default Input
