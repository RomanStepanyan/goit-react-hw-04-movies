import { Switch, Route } from 'react-router-dom';

import HomePage from './Components/HomePage/HomePage';
import Navigation from './Components/Navigation/Navigation';
import SearchMoviesPage from './Components/MoviesPage/MoviesPage';
import MovieDetails from './Components/MovieDetailsPage/MovieDetailsPage';
import './App.css';

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies" exact>
          <SearchMoviesPage />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
