import React from "react"
import './Header.sass'
import { NavLink } from 'react-router-dom'
import homeIcon from '../../icons/home.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setAuth, setCurrentUser } from '../../reducers/usersReduser'

const Header = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.users.auth)
  const currentUser = useSelector(state => state.users.currentUser)

  const logout = () => {
    dispatch(setCurrentUser(''))
    dispatch(setAuth(false))
  }

  return (
    <div className="header">
      <div className="container">
        <NavLink to={'/'} className="header__home-btn">
          <img src={homeIcon} alt="" />
        </NavLink>
        <div className="auth">
          {
            isAuth && <span className="header__current-user">{currentUser}</span>
          }
          {
            isAuth
            ?
              <button className="btn auth__btn" onClick={logout}>Logout</button>
            :
              <NavLink to={`/signIn`} className="btn auth__btn">
                Sign In / Sign Up
              </NavLink>
          }
        </div>
      </div>
    </div>
  );
}

export default Header
