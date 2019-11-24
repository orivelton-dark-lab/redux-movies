import React from 'react';
import { conect } from 'redux';
import { selectMovie } from '../actions/index';

const MovieList = (props) => {
  const listItems = props.movies.map(movie => {
    return (
      <>
        <div key={movie.title}>
          <span>{movie.title}</span>
          <button onClick={()=> selectMovie(movie)}>Details</button>
        </div>
      </>
    )
  });
}