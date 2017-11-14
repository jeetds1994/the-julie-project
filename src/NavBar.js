import React from 'react'
import './NavBar.css';

const NavBar = () => {
  return(
    <div className="navBar">
      <div className="logo">
        <h1 className="firstLast">The</h1>
        <h1 id="middle">Julie</h1>
        <h1 className="firstLast">Project</h1>
      </div>

      <div className="sections">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Boys</a>
        <a href="#">Girls</a>
        <a href="#">Customize</a>
      </div>

      <div className="account">
        <img src="https://image.flaticon.com/icons/svg/263/263142.svg" alt="my cart"/>
        <img src="https://image.flaticon.com/icons/svg/61/61135.svg" alt="my account"/>
      </div>
    </div>
  )
}

export default NavBar
