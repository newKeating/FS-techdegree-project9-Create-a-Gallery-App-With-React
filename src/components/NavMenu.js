import React from 'react';
import { NavLink } from 'react-router-dom';

const NavMenu = () => (
  <nav className="main-nav">
    <ul>
      <li><NavLink to='/search/cat'>Cats</NavLink></li>
      <li><NavLink to='/search/dog'>Dogs</NavLink></li>
      <li><NavLink to='/search/coffee'>Coffee</NavLink></li>
    </ul>
  </nav>
);

export default NavMenu;