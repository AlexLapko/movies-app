import React from 'react'
import { NavLink } from 'react-router-dom';
import './Movie.sass'

const IMG_API = 'https://image.tmdb.org/t/p/w500';

const Movie = (props) => {
  const movie = props.movie

  return (
      <div className="movie">
        <NavLink to={`/movie/${movie.id}`}>
          <div className="movie-img-box">
            {
              movie.poster_path ?
              <img className="movie__img" src={IMG_API + movie.poster_path} alt={ movie.title }/> :
              <span className="movie__no-img">
                <img src="https://img.icons8.com/ios/100/000000/no-image.png" alt={ movie.title }/>
              </span>
            }
            <div className="movie-info">
              <span className="movie__vote-average">{ movie.vote_average }</span>
              <span className="movie__release_date">{ movie.release_date }</span>
            </div>
          </div>
          <p className="movie__title">{ movie.title }</p>
        </NavLink>
      </div>
  )
}

export default Movie
