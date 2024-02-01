// ShowList.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Button from '@mui/material/Button';
import { Dummy } from '../Constants/Links';

const ShowList = ({ shows }) => {

  return (
    <div className='upper-list'>
      <ul className='list'>
        {shows.map(show => (
          <li key={show.show.id}>
            <h2>{show.show.name}</h2>
            {show.show.image && show.show.image.medium ? (
              <img src={show.show.image.medium} alt={show.show.name} />
            ) : (
              <img src={Dummy} alt="Dummy Image" />
            )}
            <h2>Language : {show.show.language}</h2>
            {show.show.genres && (
              <h2>Genre : {show.show.genres.join(', ')}</h2>
            )}
            <h2>Rating : {show.show.rating.average}</h2>
            <Link to={`/summary/${show.show.id}`}>
              <Button variant="contained">View summary</Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
