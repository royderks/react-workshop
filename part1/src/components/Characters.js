import React, { useState, useEffect } from 'react';
import './Characters.css';

export default function Characters() {
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
  );
}
