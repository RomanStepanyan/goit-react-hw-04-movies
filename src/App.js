import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';

const HomePage = lazy(() =>
  import('./Components/HomePage/HomePage' /* webpackChunkName: "HomePage" */),
);
const Navigation = lazy(() =>
  import(
    './Components/Navigation/Navigation' /* webpackChunkName: "Navigation" */
  ),
);
const SearchMoviesPage = lazy(() =>
  import(
    './Components/MoviesPage/MoviesPage' /* webpackChunkName: "MoviesPage" */
  ),
);
const MovieDetails = lazy(() =>
  import(
    './Components/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */
  ),
);

function App() {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
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
      </Suspense>
    </div>
  );
}

export default App;
