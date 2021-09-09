import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../../reducers/moviesReducer'
import { createPages } from '../../utils/pagesCreator'
import './Pages.sass'

const Pages = () => {

  const dispatch = useDispatch()
  const currentPage = useSelector(state => state.movies.currentPage)
  const pagesCount = useSelector(state => state.movies.pagesCount)

  const pages = []
  createPages(pages, pagesCount, currentPage)

  return (
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
  )
}

export default Pages