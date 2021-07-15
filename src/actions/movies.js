import axios from "axios";
import {setMovies, setIsFetching} from '../reducers/moviesReducer'

export const getMovies = (currentPage, currentSortBy) => {
  return async (dispatch) => {
    dispatch(setIsFetching(true))
    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=67eee0b8153bbee1999bcc3cb9b1b0fc&language=en-US&sort_by=${currentSortBy}&include_adult=false&include_video=false&page=${currentPage}`)
    dispatch(setMovies(response.data.results))
  }
}

export const getCurrentMovie = async (id, setMovie) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=67eee0b8153bbee1999bcc3cb9b1b0fc&language=en-US`)
  setMovie(response.data)
}