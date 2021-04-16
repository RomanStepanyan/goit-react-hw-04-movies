import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { getMoviesReviews } from '../Api/Api';

const Reviews = () => {
  const { movieId } = useParams();
  const { state } = useLocation();
  const [reviews, setReviews] = useState(state?.reviews || null);
  useEffect(() => {
    getMoviesReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews?.results.length ? (
          reviews.results.map(result => (
            <li key={result.id}>
              <h3>{result.author}</h3>
              <p>{result.content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie yet!</p>
        )}
      </ul>
    </div>
  );
};
export default Reviews;
