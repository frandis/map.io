import React from 'react';

function Navbar() {
  return (
    <div className='navbar-fixed'>
      <nav className='deep-purple darken-1'>
        <div className='nav-wrapper'>
          <a href='#' className='brand-logo'>
            map.io
          </a>
          <ul className='right hide-on-med-and-down'>
            <li>
              <a href='#'>Login</a>
            </li>
            <li>
              <a href='#'>Sign up</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
