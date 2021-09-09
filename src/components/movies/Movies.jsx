import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Movie from './movie/Movie'
import { getMovies } from '../../actions/movies'
import { getUsers } from '../../actions/users'
import './Movies.sass'
import Sort from '../sort/Sort'
import Pages from '../pages/Pages'
import users from '../../dummy_data/users.json'

const Movies = () => {

  const dispatch = useDispatch()
  const movies = useSelector(state => state.movies.items)
  const isFetching = useSelector(state => state.movies.isFetching)
  const currentPage = useSelector(state => state.movies.currentPage)
  const currentSortBy = useSelector(state => state.movies.currentSortBy)

  useEffect(() => {
    dispatch(getMovies(currentPage, currentSortBy))
  }, [currentPage, currentSortBy])


  useEffect(() => {
    dispatch(getUsers(users))
  }, [users])


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