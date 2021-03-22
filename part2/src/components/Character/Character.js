import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Filter from '../Filter/Filter';
import List from '../List/List';
import './Character.css';

export default function Character() {
  const [character, setCharacter] = useState([]);
  const [filter, setFilter] = useState('');
  const { characterId } = useParams();

  useEffect(() => {
    function getCharacter() {
      fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
        .then((result) => result.json())
        .then((data) => {
          return setCharacter(data);
        });
    }

    getCharacter();
  }, [characterId]);

  return (
    <div className='character'>
      {character && <List characters={[character]} />}
    </div>
  );
}
