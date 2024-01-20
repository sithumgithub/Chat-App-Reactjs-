import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Sithum Chat</span>
      <div className="user">
        <img src="https://www.shutterstock.com/image-photo/closeup-portrait-face-young-pretty-260nw-1927424297.jpg" alt="" />
        <span>John</span>
        <button>logout</button>
      </div>
      
    </div>
  )
}

export default Navbar
