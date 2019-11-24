import { combineReducers } from 'redux';

const moviesReducer = () => {
  return [
    {title: 'Spider-Man1', releaseDate: '05-07-2017', rating: 7.4},
    {title: 'Spider-Man2', releaseDate: '05-07-2017', rating: 7.4},
    {title: 'Spider-Man3', releaseDate: '05-07-2017', rating: 7.4},
    {title: 'Spider-Man4', releaseDate: '05-07-2017', rating: 7.4},
    {title: 'Spider-Man5', releaseDate: '05-07-2017', rating: 7.4},
    {title: 'Spider-Man6', releaseDate: '05-07-2017', rating: 7.4}
  ]
}

const selectedMovieReducer = (state = null, action) => {
  switch(action.type) {
    case 'MOVIE_SELECTED':
      return action.payload
    default:
      return state
  }
}

export default combineReducers( {
  movies: moviesReducer,
  selectedMovie: selectedMovieReducer
});
