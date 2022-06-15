import s from './MovieDescription.module.css';

function MovieDescription({ movie }) {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;
  return (
      <div className={s.card}>
        <img
          className={s.poster}
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
        />
        <ul>
          <li>
            <h2>
              {title} ({release_date.slice(0, 4)})
            </h2>
            <p>
              User Score: {vote_average ? `${vote_average * 10}%` : 'no score'}
            </p>
          </li>
          <li>
            <h3>Overview</h3>
            <p>{overview}</p>
          </li>
          <li>
            <h3>Genres</h3>
            <p>{genres.map(genre => genre.name).join(', ')}</p>
          </li>
        </ul>
      </div>
  );
}

export default MovieDescription;
