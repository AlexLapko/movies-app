import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCurrentMovie } from '../../actions/movies'
import './MovieInner.sass'

const IMG_API = 'https://image.tmdb.org/t/p/w500'

const MovieInner = () => {
  const {id} = useParams()
  const [movie, setMovie] = useState({})

  useEffect(() => {
    getCurrentMovie(id, setMovie)
  }, [id, setMovie])

  return (
    <div className="movie-inner">
      <div className="movie-inner__image">
        {
          movie.poster_path ?
          <img src={IMG_API + movie.poster_path} alt={ movie.title }/> :
          <span className="movie-inner__no-img">
            <img src="https://img.icons8.com/ios/100/000000/no-image.png" alt={ movie.title }/>
          </span>
        }
      </div>
      <div className="movie-inner-description">
        <p className="movie-inner__title">{movie.title}</p>
        <p className="movie-inner__overview">
          <span>Overview:</span>
          {movie.overview}
        </p>
        <p className="movie-inner__popularity">
          <span>Popularity:</span>
          {movie.popularity}
        </p>
        <div className="movie-inner__genres">
          <span>Genres:</span>
          {movie.genres ? movie.genres.map(({id, name}, i) => <span key={id}>
          {i !== movie.genres.length - 1 ? `${name}` :
          ` ${name}`}
          </span>) : null}
        </div>
        <div className="movie-inner__vote-average">
          <span>Ratings:</span>
          {movie.vote_average}
          <span> ({movie.vote_count})</span>
        </div>
        <p className="movie-inner__release">
          <span>Release date:</span>
          { movie.release_date }
        </p>
      </div>
    </div>
  )
}

export default MovieInner