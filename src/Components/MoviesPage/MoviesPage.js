import { Link, useRouteMatch, useLocation, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getSearchedMovies } from '../Api/Api';
import s from './MoviesPage.module.css';

const SearchMoviesPage = () => {
  const { state } = useLocation();
  const { url } = useRouteMatch();
  const history = useHistory();
  const [keyWord, setKeyWord] = useState(state?.keyWord || '');
  const [searchedMovies, setSearchedMovies] = useState(
    state?.searchedMovies || null,
  );

  const onChange = ({ target }) => {
    setKeyWord(target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    getSearchedMovies(keyWord).then(setSearchedMovies);
    const params = new URLSearchParams();
    params.append('query', keyWord);
    history.push({ search: params.toString() });
  };

  // useEffect(() => {
  //   if (url && history.location.search) {
  //     getSearchedMovies(state?.keyWord).then(setSearchedMovies);
  //   }
  // }, [url, history.location.search]);

  useEffect(() => {
    if (!state?.keyWord) return;
    getSearchedMovies(state?.keyWord).then(setSearchedMovies);
  }, [state?.keyWord]);

  return (
    <>
      <form className={s.form} onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Find movies"
          name="keyWord"
          value={keyWord}
          className={s.input}
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
              <Link
                to={{
                  pathname: `${url}/${movie.id}`,
                  state: { keyWord, url, search: history.location.search },
                }}
              >
                {movie.original_title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};
export default SearchMoviesPage;
