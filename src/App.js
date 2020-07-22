import React from 'react'
import { Router } from '@reach/router'
import JoinScreen from './components/JoinScreen'
import Chat from './components/Chat'

const App = () => {
  return (
    <div>
      <Router>
        <JoinScreen path='/' />
        <Chat path='/chat' />
      </Router>
    </div>
  )
}

export default App
