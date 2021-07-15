import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCurrentMovie } from '../../actions/movies'

const IMG_API = 'https://image.tmdb.org/t/p/w500';

const MovieInner = () => {
  const {id} = useParams()
  const [movie, setMovie] = useState({})

  useEffect(() => {
    getCurrentMovie(id, setMovie)
  }, [id, setMovie])

  return (
    <div>
      <img src={IMG_API + movie.poster_path} alt={ movie.title }/>
      <p>{movie.title}</p>
      <p>{movie.overview}</p>
      
      <p>{movie.popularity}</p>
      <div className="movie-genres">
        {movie.genres ? movie.genres.map(({id, name}, i) => <span key={id}>
        {i !== movie.genres.length - 1 ? `${name}, ` :
         ` ${name}`}
        </span>) : null}
      </div>
      <p>{movie.vote_average}</p>
      <p>{movie.vote_count}</p>
      <p>{ movie.release_date }</p>
    </div>
  )
}

export default MovieInner