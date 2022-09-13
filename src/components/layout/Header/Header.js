import React from 'react';
import Nav from '../Nav/Nav';
import './Header.scss';
import logo from '../../../assets/media/logo2x.png'

const Header = () => {
  return (
    <header>
      <div className='row'>
        <a href="/"><img className='logo' src={logo} alt="logo"/></a>
        <Nav />
      </div>
    </header>
  )
}

export default Header