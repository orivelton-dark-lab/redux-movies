export const selectMovie = movie => {
  return {
    type: 'MOVIE_SELECTED',
    playload: movie
  }
}
