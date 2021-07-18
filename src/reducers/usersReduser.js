const SET_USERS = "SET_USERS"
const SET_AUTH = "SET_AUTH"
const SET_CURRENT_USER = "SET_CURRENT_USER"

const defaultState = {
  users: [],
  currentUser: '',
  auth: false,
  errorMessagesSignIn: 'Incorrect email or password',
  errorMessagesSignUp: 'User with this email is already registered',
}

export default function usersReducer (state = defaultState, action) {
  switch(action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      }
    case SET_AUTH:
      return {
        ...state,
        auth: action.payload
      }
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state
  }
}

export const setUsers = (users) => ({type: 'SET_USERS', payload: users})
export const setAuth = (bool) => ({type: 'SET_AUTH', payload: bool})
export const setCurrentUser = (user) => ({type: 'SET_CURRENT_USER', payload: user})
