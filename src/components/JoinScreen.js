import React, { useState } from 'react'
import { Link } from '@reach/router'

const JoinScreen = () => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  return (
    <div className='join'>
      <div className='join__inner'>
        <h1 className='join__heading'>Messagebox</h1>
        <div className='join__inputgroup'>
          <input
            className='join__inputgroup--input'
            placeholder='Name'
            type='text'
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            className='join__inputgroup--input'
            placeholder='Room'
            type='text'
            onChange={(e) => setRoom(e.target.value)}
          ></input>
        </div>
        <Link
          className='join__link'
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
