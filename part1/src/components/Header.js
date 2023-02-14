import logo from '../logo.svg';
import './Header.css';

export default function Header() {
  return (
    <header className='header'>
      <div className='logo'>
        <img src={logo} alt='logo' />
        <h1>React Workshop</h1>
      </div>
      <div className='navigation'>
        <ul>
          <li>
            <a href='/#'>Link #1</a>
          </li>
          <li>
            <a href='/#'>Link #2</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
