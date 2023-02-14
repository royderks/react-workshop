import { useRouteError } from 'react-router-dom';
import './ErrorPage.css';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className='error'>
      <h1>404</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
