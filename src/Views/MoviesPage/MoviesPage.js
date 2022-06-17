import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchValue } from '../../services/moviesApi';
import Container from '../../Components/Container';
import MoviesList from '../../Components/MoviesList';

function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams(); // адресная строка
  const [searchValue, setSearchValue] = useState(searchParams.get('searchValue')?? '');
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    if (searchValue) {
      fetchSearchValue(searchValue).then(({ results }) => {
        if (results.length === 0) {
          alert("We didn't find anything, try again.");
          return;
        }

        setMoviesList(results);
      });
    }
  }, [searchValue]);

  function getSearchValue(e) {
    e.preventDefault();
    let inputValue = e.currentTarget.children.searchValue;

    if (!inputValue.value) {
      alert('Enter something to start searching');
      return;
    }
    setSearchParams({ query: inputValue });
    setSearchValue(inputValue.value.toLowerCase());
    inputValue.value = '';
  }

  console.log(moviesList);

  return (
    <Container>
      <form onSubmit={getSearchValue}>
        <input type="text" placeholder="Search..." name="searchValue" />
        <button type="submit">Search</button>
      </form>

      {moviesList && <MoviesList moviesList={moviesList} to={''} />}
    </Container>
  );
}

export default MoviesPage;
