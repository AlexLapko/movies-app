import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Movie from './movie/Movie'
import { getMovies } from '../../actions/movies'
import './Movies.sass'
import { setCurrentPage, setCurrentSortBy } from '../../reducers/moviesReducer'
import { createPages } from '../../utils/pagesCreator'
import Sort from '../sort/Sort'

const Movies = () => {

  const dispatch = useDispatch()
  const movies = useSelector(state => state.movies.items)
  const isFetching = useSelector(state => state.movies.isFetching)
  const currentPage = useSelector(state => state.movies.currentPage)
  const pagesCount = useSelector(state => state.movies.pagesCount)
  const currentSortBy = useSelector(state => state.movies.currentSortBy)

  const pages = []
  createPages(pages, pagesCount, currentPage)

  useEffect(() => {
    dispatch(getMovies(currentPage, currentSortBy))
  }, [currentPage, currentSortBy])


  return (
    <div>
      <div className="sort">
        <span className="sort__title">Sort by: </span>
        <select className="select" onChange={(e) => dispatch(setCurrentSortBy(e.target.value))}>
          <option value="" style={{display: 'none'}}>Please select</option>
          <option value="popularity.desc">Default</option>
          <option value="vote_count.asc">Vote rating (ascending)</option>
          <option value="vote_count.desc">Vote rating (descending)</option>
          <option value="release_date.asc">Release date (ascending)</option>
          <option value="release_date.desc">Release date (descending)</option>
        </select>
      </div>

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
      <div className="pages">
        {
          currentPage !== 1
          ? 
          <Fragment>
            <span className="page" onClick={() => dispatch(setCurrentPage(1))}>&#8249;&#8249;</span>
            <span className="page" onClick={() => dispatch(setCurrentPage(currentPage - 1))}>&#8249;</span>
          </Fragment>
          :
          ''
        }
        {
          pages.map((page, index) => <span
            key={index}
            className={currentPage === page ? "current-page page" :"page"}
            onClick={() => dispatch(setCurrentPage(page))}>{page}</span>)
        }
        {
          currentPage !== pagesCount
          ?
          <Fragment>
            <span className="page" onClick={() => dispatch(setCurrentPage(currentPage + 1))}>&#8250;</span>
            <span className="page" onClick={() => dispatch(setCurrentPage(pagesCount))}>&#8250;&#8250;</span>
          </Fragment>
          :
          ''
        }
      </div>
    </div>
  )
}

export default Movies