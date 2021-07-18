import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Movie from './movie/Movie'
import { getMovies } from '../../actions/movies'
import './Movies.sass'
import Sort from '../sort/Sort'
import Pages from '../pages/Pages'

const Movies = () => {

  const dispatch = useDispatch()
  const movies = useSelector(state => state.movies.items)
  const isFetching = useSelector(state => state.movies.isFetching)
  const currentPage = useSelector(state => state.movies.currentPage)
  const currentSortBy = useSelector(state => state.movies.currentSortBy)

  useEffect(() => {
    dispatch(getMovies(currentPage, currentSortBy))
  }, [currentPage, currentSortBy])

  return (
    <div>
      <Sort />

      <div className="movies">
        {
          isFetching === false
            ?
          movies.map(movie => (
            <Movie movie={movie} key={movie.id}/>
          ))
            :
          <div className="fetching">

          </div>
        }
      </div>

      <Pages />
    </div>
  )
}

export default Movies