import React, { useState, useEffect } from 'react';
import Filter from '../Filter/Filter';
import List from '../List/List';
import './Characters.css'

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    async function getCharacters() {
      const data = await fetch('https://rickandmortyapi.com/api/character');

      data.json().then((data) => {
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
      <List characters={characters} />
    </div>
  );
}
