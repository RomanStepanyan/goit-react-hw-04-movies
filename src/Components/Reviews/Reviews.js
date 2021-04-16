import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { getMoviesReviews } from '../Api/Api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    getMoviesReviews(movieId).then(setReviews);
  }, [movieId]);
  console.log(reviews);

  return (
    <div>
      <ul>
        {reviews &&
          reviews.results.map(result => (
            <li key={result.id}>
              <h3>{result.author}</h3>
              <p>{result.content}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Reviews;
