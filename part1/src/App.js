import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    function getCharacters() {
      const data = fetch('https://rickandmortyapi.com/api/character')
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
      <footer className='footer'>
        <div className='about'>
          <p>
            This page was created as part of the React Workshop &copy; Roy Derks
          </p>
        </div>
        <div className='links'>
          <ul>
            <li>
              <a href='#'>Link #1</a>
            </li>
            <li>
              <a href='#'>Link #2</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
