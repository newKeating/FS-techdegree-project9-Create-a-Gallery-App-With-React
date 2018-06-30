import React from 'react';
import SearchForm from './SearchForm';
import NavMenu from './NavMenu';

const Header = (props) => (
  <div>
    <SearchForm props={props}/>
    <NavMenu />
  </div>
);

export default Header;