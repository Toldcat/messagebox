import React, { useState } from 'react'
import { Link } from '@reach/router'

const JoinScreen = () => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  return (
    <div className='join'>
      <div className='join__inner'>
        <h1 className='join__heading'>Messagebox</h1>
        <div>
          <input
            placeholder='Name'
            className='join__input'
            type='text'
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            placeholder='Room'
            className='join__input'
            type='text'
            onChange={(e) => setRoom(e.target.value)}
          ></input>
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          Sign In
        </Link>
      </div>
    </div>
  )
}
export default JoinScreen
