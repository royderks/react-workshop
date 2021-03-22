import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Characters from './components/Characters/Characters';

function App() {
  return (
    <div className='main'>
      <Header />
      <div className='intro'>
        <p>
          The code for this workshop uses the{' '}
          <a
            href='https://rickandmortyapi.com/documentation'
            target='_blank'
            rel='noopener noreferrer'
          >
            The Rick and Morty API
          </a>
          , which is a RESTful and GraphQL API based on the television show Rick
          and Morty. You will have access to about hundreds of characters,
          images, locations and episodes. The Rick and Morty API is filled with
          canonical information as seen on the TV show.
        </p>
      </div>
      <Characters />
      <Footer />
    </div>
  );
}

export default App;
