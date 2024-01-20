import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQuZTShtUY4zA2cX9_MJEHAu4Fqud8TUblNGsE38gm5Q&s" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQuZTShtUY4zA2cX9_MJEHAu4Fqud8TUblNGsE38gm5Q&s" alt="" />
      </div>
    </div>
  )
}

export default Message
