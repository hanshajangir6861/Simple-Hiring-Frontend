import React from 'react'
import './Header.css'
import logo from '../../Assests/FSL_Logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='logo-cont'>
        <Link to="/home"><img src={logo} alt='Failed to load Logo' /></Link>
      </div>
      <nav>
        <ul className='nav'>
          <li><Link to="/home">Home</Link></li>
          <li><Link>Categories</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
