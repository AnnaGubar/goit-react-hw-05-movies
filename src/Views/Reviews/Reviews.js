import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/moviesApi';
import Container from '../../Components/Container';
import s from './Reviews.module.css';

function Reviews() {
  const [reviewList, setReviewList] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews(movieId).then(({ results }) => {
      console.log(results);

      const dataReview = results.map(({ id, author, content }) => {
        return {
          id,
          author,
          content,
        };
      });
      setReviewList(dataReview);
    });
  }, [movieId]);



  return (
    <Container>
      {reviewList.length>0 ? (
        <ul className={s.list}>
          {reviewList.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.title}>We do not have any reviews for this movie.</p>
      )}
    </Container>
  );
}

export default Reviews;
