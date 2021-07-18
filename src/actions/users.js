import { setUsers } from '../reducers/usersReduser'

export const getUsers = (users) => {
  return async (dispatch) => {
    dispatch(setUsers(users))
  }
}

