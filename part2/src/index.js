import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Characters from './components/Characters/Characters';
import Character from './components/Character/Character';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Characters />,
      },
      {
        path: '/characters',
        element: <Characters />,
      },
      {
        path: '/characters/:characterId',
        element: <Character />,
      },
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root'),
);
