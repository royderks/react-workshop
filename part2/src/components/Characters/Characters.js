import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Filter from '../Filter/Filter';
import List from '../List/List';
import './Characters.css';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const filter = new URLSearchParams(search).get('species') || '';

  function setFilter(filter) {
    navigate(`${pathname}?species=${filter}`);
  }

  useEffect(() => {
    function getCharacters() {
      fetch(`https://rickandmortyapi.com/api/character?species=${filter}`)
        .then((result) => result.json())
        .then((data) => {
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
