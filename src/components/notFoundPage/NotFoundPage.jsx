import React from 'react'
import { NavLink } from 'react-router-dom'
import imgNotFoundPage from '../../images/404.jpg'
import './NotFoundPage.sass'

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <div className="not-found__img">
        <img src={imgNotFoundPage} alt="Note found page" />
      </div>
      <div className="not-found-info">
        <h1 className="not-found__title">OOPS!<br />PAGE NOT FOUND!</h1>
        <NavLink to={'/'} className="btn">Back to movies</NavLink>
      </div>
    </div>
  )
}

export default NotFoundPage