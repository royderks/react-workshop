import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  return (
    <div className='navigation'>
      <ul>
        <li>
          <Link to='/characters'>Characters</Link>
        </li>
        <li>
          <a href='/#'>Link #2</a>
        </li>
      </ul>
    </div>
  );
}
