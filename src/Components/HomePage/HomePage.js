import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getPopularMovies } from '../Api/Api';
import s from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getPopularMovies().then(setMovies);
  }, []);
  console.log(movies);

  return (
    <div>
      <div className={s.page_title_wrapper}>
        <h2 className={s.page_title}>Tranding today</h2>
      </div>

      <ul className={s.list}>
        {movies &&
          movies.results.map(movie => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`} className={s.list_item}>
                <img
                  className={s.image}
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  alt={movie.original_title}
                />
                {/* <p className={s.movie_title}>
                  {movie.original_title}
                  <span>{movie.name}</span>
                </p> */}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default HomePage;
