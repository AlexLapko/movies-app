import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentSortBy } from '../../reducers/moviesReducer'
import './Sort.sass'

const Sort = () => {
  const dispatch = useDispatch()

  return (
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
  )
}

export default Sort