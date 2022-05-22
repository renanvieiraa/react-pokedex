import React from 'react';
import './menu-top-bar.scss';

export function MenuTopBar() {
  return (
    <nav className='navbar-container'>
      <div>
        <ul className='d-flex'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/pokemons'>Pokemons</a>
          </li>
          <li>
            <a href='/about'>Sobre</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
