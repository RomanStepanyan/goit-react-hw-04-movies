import { useState, useEffect } from 'react';
import { NavLink, Router, useParams, useRouteMatch } from 'react-router-dom';
import { getMovieDetails } from '../Api/Api';

import Cast from '../Cast/Cast';
import s from './MovieDetailsPage.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState('');

  const { movieId } = useParams();
  const { url } = useRouteMatch();
  console.log(movieId);
  console.log(url);

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <div className={s.container}>
      {movie && (
        <div className={s.movie_container}>
          <img
            className=""
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.original_title}
          />
          <div className={s.description_container}>
            <h2 className={s.title}>{movie.original_title}</h2>
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
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to={`${url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
      </div>
      {/* <Router path="/movies/:movieId/cast">
        <Cast />
      </Router> */}
      {/* <Router path="/movies/:movieId/reviews">
        <Reviews />
      </Router> */}
    </div>
  );
};
export default MovieDetails;
