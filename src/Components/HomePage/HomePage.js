import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { getPopularMovies } from '../Api/Api';
import s from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const { url } = useRouteMatch();

  useEffect(() => {
    getPopularMovies().then(setMovies);
  }, []);

  return (
    <div>
      <div className={s.page_title_wrapper}>
        <h2 className={s.page_title}>Tranding today</h2>
      </div>

      <ul className={s.list}>
        {movies &&
          movies.results.map(movie => (
            <li key={movie.id} className={s.movie_list_item}>
              <p className={s.vote}>{movie.vote_average}</p>
              <Link
                to={{
                  pathname: `movies/${movie.id}`,
                  state: { url },
                }}
                className={s.list_item}
              >
                <img
                  className={s.image}
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  alt={movie.original_title}
                />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default HomePage;
