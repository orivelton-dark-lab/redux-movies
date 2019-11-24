import React from 'react';
import { connect } from 'redux';
import { selectMovie } from '../actions/index';

const MovieList = (props) => {
  const listItems = props.movies.map(movie => {
    return (
      <li key={movie.title}>
        <span>{movie.title}</span>
        <button onClick={()=> props.selectMovie(movie)}>Details</button>
      </li>
    )
  })

  return (
    <div className="list-container">
      <h2>Movie List</h2>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  const { movies } = state;
  return {
    movies
  }
}

const mapDispatchToProps = {
  selectMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
