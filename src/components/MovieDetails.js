import React from 'react';
import { connect } from 'react-redux'

const MovieDetails = props => {
  if(props.selectedMovie) {
    return(
      <div className="datail-container" style={{width: '70%'}}>
        <h2>Movie</h2>
        <div className="propertie">
          <p>Select Movie</p>
        </div>
      </div>
    )
  } else {
    return (
      <div className="datail-container" style={{width: '70%'}}>
        <h2>Movie</h2>
        <div className="propertie">
          <p>Title: { props.selectedMovie.title }</p>
          <p>Release: { props.selectedMovie.releaseDate }</p>
          <p>Rating: { props.selectedMovie.rating }</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedMovie: state.selectedMovie
  }
}

export default connect(mapStateToProps)(MovieDetails);