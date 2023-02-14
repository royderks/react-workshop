import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    function getCharacters() {
      fetch('https://rickandmortyapi.com/api/character')
        .then((result) => result.json())
        .then((data) => {
          if (filter) {
            return setCharacters(
              data.results.filter((result) => result.species === filter),
            );
          }

          return setCharacters(data.results);
        });
    }

    getCharacters();
  }, [filter]);

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
      <div className='characters'>
        <div className='filter'>
          <label>
            Filter by species:&nbsp;
            <select
              selected={filter}
              onChange={(event) => setFilter(event.target.value)}
            >
              <option value=''>All species</option>
              <option value='Alien'>Alien</option>
              <option value='Human'>Human</option>
            </select>
          </label>
        </div>
        <div className='list'>
          {characters.length &&
            characters.map((character) => (
              <div className='card'>
                <img src={character.image} alt={character.name} />
                <h3>
                  {character.name} ({character.species})
                </h3>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
