import React from 'react'

const UserList = ({ roomData }) => {
  return (
    <div>
      <h3>{`Current users online: ${roomData.length}`}</h3>
      {roomData.map((user, index) => (
        <p key={index}>{user.name}</p>
      ))}
    </div>
  )
}

export default UserList
