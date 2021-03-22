import logo from '../../logo.svg';
import './Logo.css';

export default function Logo() {
  return (
    <div className='logo'>
      <img src={logo} alt='logo' />
      <h1>React Workshop</h1>
    </div>
  );
}
