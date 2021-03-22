import React from 'react';
import { Link } from 'react-router-dom';
import './List.css';

export default function List({ characters }) {
  return (
    <div className='list'>
      {characters.length &&
        characters.map((character) => (
          <div className='card'>
            <img src={character.image} alt={character.name} />
            <Link to={`/characters/${character.id}`}>
              <h3>
                {character.name} ({character.species})
              </h3>
            </Link>
          </div>
        ))}
    </div>
  );
}
