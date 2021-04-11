import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getPopularMovies } from '../Api/Api';

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getPopularMovies().then(setMovies);
  }, []);
  console.log(movies);

  return (
    <div>
      <p className="title">Tranding today</p>
      <ul>
        {movies &&
          movies.results.map(movie => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>
                {movie.original_title}
                {movie.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default HomePage;
