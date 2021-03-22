import React from 'react';
import logo from '../../logo.svg';
import Navigation from '../Navigation/Navigation';
import './Header.css';

export default function Header() {
  return (
    <header className='header'>
      <div className='logo'>
        <img src={logo} alt='logo' />
        <h1>React Workshop</h1>
      </div>
      <Navigation />
    </header>
  );
}
