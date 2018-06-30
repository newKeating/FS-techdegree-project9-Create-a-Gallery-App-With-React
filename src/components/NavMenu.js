import React from 'react';
import { NavLink } from 'react-router-dom';

const NavMenu = () => (
  <nav className="main-nav">
    <ul>
      <li><NavLink to='/cat'>Cats</NavLink></li>
      <li><NavLink to='/dog'>Dogs</NavLink></li>
      <li><NavLink to='/coffee'>Coffee</NavLink></li>
    </ul>
  </nav>
);

export default NavMenu;