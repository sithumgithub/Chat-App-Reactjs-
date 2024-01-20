import React from 'react';
import Cam from '../img/cam.svg';
import Add from '../img/add.svg';
import More from '../img/more.png';
import Messages from './Messages';
import Input from './Input'


const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Sithum</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
