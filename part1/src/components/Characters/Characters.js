import React, { useState, useEffect } from 'react';
import Filter from '../Filter/Filter';
import './Characters.css';

function Characters() {
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
      <Filter filter={filter} setFilter={setFilter} />
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

export default Characters;
