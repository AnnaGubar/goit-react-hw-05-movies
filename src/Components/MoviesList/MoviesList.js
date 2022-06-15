import { Link,useLocation } from 'react-router-dom';
// import s from 'MoviesList.module.css'

function MoviesList({moviesList,to}) {
  const location = useLocation();
  return (
    <ul>
      {moviesList.map(({id,original_title:title}) => (
          <li key={id}>
            <Link to={`${to}${id}`} state={location}>{title}</Link>
          </li>
        ))}
    </ul>
  );
}

export default MoviesList;
