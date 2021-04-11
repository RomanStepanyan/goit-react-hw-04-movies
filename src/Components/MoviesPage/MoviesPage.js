import { Link, useRouteMatch } from 'react-router-dom';
import { useState } from 'react';

import { getSearchedMovies } from '../Api/Api';

const SearchMoviesPage = () => {
  const [keyWord, setKeyWord] = useState('');
  const [searchedMovies, setSearchedMovies] = useState(null);
  const { url } = useRouteMatch();

  const onChange = ({ target }) => {
    setKeyWord(target.value);
    console.log(keyWord);
  };

  const onSubmit = event => {
    event.preventDefault();
    getSearchedMovies(keyWord).then(setSearchedMovies);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Find movies"
          name="keyWord"
          value={keyWord}
          className="search_input"
          onChange={onChange}
        />
        <button type="submit" className="input_submit_button">
          Search
        </button>
      </form>
      <ul>
        {searchedMovies &&
          searchedMovies.results.map(movie => (
            <li key={movie.id}>
              <Link to={`${url}/${movie.id}`}>{movie.original_title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};
export default SearchMoviesPage;
