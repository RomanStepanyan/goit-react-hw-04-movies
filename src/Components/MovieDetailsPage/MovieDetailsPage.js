import { useState, useEffect, lazy, Suspense } from 'react';
import {
  NavLink,
  Route,
  useParams,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { getMovieDetails } from '../Api/Api';
import GoBackButton from '../GoBackButton/GoBackButton';
import s from './MovieDetailsPage.module.css';

const Cast = lazy(() => import('../Cast/Cast' /* webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import('../Reviews/Reviews' /* webpackChunkName: "Reviews" */),
);

const MovieDetails = () => {
  const { state } = useLocation();
  const [movie, setMovie] = useState(state?.movie || '');
  const { push } = useHistory();
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <div className={s.container}>
      {movie && <GoBackButton push={push} url={state?.url} state={state} />}

      {movie && (
        <div className={s.movie_container}>
          <img
            className=""
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.original_title}
          />
          <div className={s.description_container}>
            <h2 className={s.title}>
              {movie.original_title} ({movie.release_date})
            </h2>
            <p>User score : {Number(movie.vote_average) * 10}%</p>
            <h3 className={s.overview_title}>Overview</h3>
            <p>{movie.overview}</p>
            <h3 className={s.genres_title}>Genres</h3>
            <div className={s.genres_container}>
              {movie.genres.map(genre => (
                <span key={genre.id} className={s.genres}>
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
      <hr />
      <div className={s.cast_reviews_container}>
        <h3 className={s.information_title}>Additional information</h3>
        <ul className={s.informational_list}>
          <li>
            <NavLink to={{ pathname: `${url}/cast`, state }}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={{ pathname: `${url}/reviews`, state }}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <Route path={`${path}/cast`}>
          <Cast />
        </Route>
        <Route path={`${path}/reviews`}>
          <Reviews />
        </Route>
      </Suspense>
    </div>
  );
};
export default MovieDetails;
