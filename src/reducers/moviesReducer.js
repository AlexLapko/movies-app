const SET_MOVIES = "SET_MOVIES"
const SET_IS_FETCHING = "SET_IS_FETCHING"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_CURRENT_SORT_BY = "SET_CURRENT_SORT_BY"

const defaultState = {
  items: [],
  isFetching: true,
  currentPage: 1,
  pagesCount: 15,
  currentSortBy: 'popularity.desc'
}

export default function moviesReducer (state = defaultState, action) {
  switch(action.type) {
    case SET_MOVIES:
      return {
        ...state,
        items: action.payload,
        isFetching: false
      }
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }
    case SET_CURRENT_SORT_BY:
      return {
        ...state,
        currentSortBy: action.payload
      }

    default:
      return state
  }
}

export const setMovies = (movies) => ({type: 'SET_MOVIES', payload: movies})
export const setIsFetching = (bool) => ({type: 'SET_IS_FETCHING', payload: bool})
export const setCurrentPage = (page) => ({type: 'SET_CURRENT_PAGE', payload: page})
export const setCurrentSortBy = (val) => ({type: 'SET_CURRENT_SORT_BY', payload: val})
