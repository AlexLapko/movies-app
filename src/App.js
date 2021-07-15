// import { useDispatch } from 'react-redux'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Movies from './components/movies/Movies'
import './App.sass'
import MovieInner from './components/movieInner/MovieInner'
import Auth from './components/auth/Auth'
import Header from './components/header/Header'

const App = () => {
  // const dispatch = useDispatch()

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path='/' component={Movies} />
            <Route path='/movie/:id' component={MovieInner} />
            <Route path='/auth' component={Auth}/>
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App