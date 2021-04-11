import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from '../Api/Api';
import s from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [casting, setCasting] = useState(null);
  useEffect(() => {
    getMovieCredits(movieId).then(setCasting);
  }, [movieId]);
  console.log(casting);
  return (
    <div className={s.casting_container}>
      <ul className={s.casting_list}>
        {casting &&
          casting.cast.map(item => (
            <li className={s.casting_items_list} key={item.id}>
              <p>{item.name}</p>
              <img
                className={s.casting_image}
                src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`}
                alt={item.name}
              />
              <p className={s.casting_character}>
                Character : {item.character}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Cast;
