import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Nav1</Link></li>
        <li><Link to="/">Nav2</Link></li>
        <li><Link to="/">Nav3</Link></li>
      </ul>
    </nav>
  )
}

export default Nav