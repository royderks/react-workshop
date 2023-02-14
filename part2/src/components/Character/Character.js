import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import List from '../List/List';
import '../Characters/Characters.css';

export default function Character() {
  const [character, setCharacter] = useState([]);
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
