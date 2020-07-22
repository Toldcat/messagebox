const users = []

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase()
  room = room.trim().toLowerCase()

  //check if the user is already exists (someone entering the same room with the same name)
  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  )
  //error handling
  if (existingUser) {
    return { error: 'Username already exists' }
  }

  //create user
  const user = { id, name, room }
  users.push(user)
  return { user }
}

const removeUser = (id) => {
  //find user's index in the array using the id provided
  const index = users.findIndex((user) => user.id === id)
  //remove that user from the users array
  if (index > 0) {
    //return the user that was deleted
    return users.splice(index, 1)[0]
  }
}

const getUser = (id) => users.find((user) => user.id === id)

const getUsersInRoom = (room) => {
  //return all users from the room provided
  return users.filter((user) => user.room === room)
}

module.exports = { addUser, removeUser, getUser, getUsersInRoom }
