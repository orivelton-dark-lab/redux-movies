import { conbineReducers } from 'redux';

const moviesReducer = () => {
  return [
    {title: 'Spider-Man', releaseDate: '05-07-2017', rating: 7.4},
    {title: 'Spider-Man', releaseDate: '05-07-2017', rating: 7.4},
    {title: 'Spider-Man', releaseDate: '05-07-2017', rating: 7.4},
    {title: 'Spider-Man', releaseDate: '05-07-2017', rating: 7.4},
    {title: 'Spider-Man', releaseDate: '05-07-2017', rating: 7.4},
    {title: 'Spider-Man', releaseDate: '05-07-2017', rating: 7.4}
  ]
}

const selectedMovieReducer = (state = null, action) => {
  switch(action.type) {
    case 'MOVIE_SELECTED':
      return action.playload
    default:
      return state
  }
}

export default combineReducers( {
  movies: moviesReducer,
  selectedMovie: selectedMovieReducer
});
