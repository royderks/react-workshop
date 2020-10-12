import React from 'react';
import './List.css'

export default function List({ characters }) {
  return (
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
  );
}
