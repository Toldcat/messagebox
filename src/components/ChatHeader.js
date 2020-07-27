import React from 'react'
import onlineIcon from '../icons/onlineIcon.png'
import closeIcon from '../icons/closeIcon.png'

const ChatHeader = ({ roomName }) => (
  <div className='header'>
    <div className='header__left'>
      <img src={onlineIcon} alt='online icon' className='header__left--icon' />
      <h3 className='header__left--text'>{roomName}</h3>
    </div>

    <div className='header__right'>
      <a href='/'>
        <img src={closeIcon} alt='close icon' className='header__right--icon' />
      </a>
    </div>
  </div>
)

export default ChatHeader
