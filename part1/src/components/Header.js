import logo from '../logo.svg';
import './Header.css';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className='header'>
      <div className='logo'>
        <img src={logo} alt='logo' />
        <h1>React Workshop</h1>
      </div>
      <Navigation
        links={[
          { href: '/#', label: 'Link #1' },
          { href: '/#', label: 'Link #2' },
        ]}
      />
    </header>
  );
}
