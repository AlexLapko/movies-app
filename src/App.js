import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Movies from './components/movies/Movies'
import './App.sass'
import MovieInner from './components/movieInner/MovieInner'
import SignIn from './components/auth/signIn/SignIn'
import SignUp from './components/auth/signUp/SignUp'
import Header from './components/header/Header'
import NotFoundPage from './components/notFoundPage/NotFoundPage'

const App = () => {

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path='/' component={Movies} />
            <Route path='/movie/:id' component={MovieInner} />
            <Route path='/signIn' component={SignIn}/>
            <Route path='/signUp' component={SignUp}/>
            <Route path='*' component={NotFoundPage}/>
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App