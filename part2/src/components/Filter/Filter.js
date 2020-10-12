import React from 'react';
import './Filter.css'

export default function Filter({ filter, setFilter }) {
  return (
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
  );
}
