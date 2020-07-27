import React from 'react'

const UserList = ({ roomData }) => {
  return (
    <div className='users'>
      <h3 className='users__heading'>{`Current users online: ${roomData.length}`}</h3>
      {roomData.map((user, index) => (
        <p className='users__user' key={index}>
          {user.name}
        </p>
      ))}
    </div>
  )
}

export default UserList
