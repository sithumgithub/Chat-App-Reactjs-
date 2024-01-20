import React from 'react'
import Att from '../img/more.png'
import Gal from '../img/gal.svg'


const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something...' />
      <div className="send">
        <img src={Att} alt="" />
        <input type="file" style={{display:'none'}} id='file' />
        <label htmlFor="file">
          <img src={Gal} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input
