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
    //получаем через метод has пара-тр с адресной строки
    const searchParamsQuery = searchParams.get('query');

    if (!searchParamsQuery) {
      return;
    }

    if (searchParams) {
      fetchSearchValue(searchParamsQuery).then(({ results }) => {
        if (results.length === 0) {
          alert("We didn't find anything, try again.");
          return;
        }

        setMoviesList(results);
      });
    }
  }, [searchParams]);

  function getSearchValue(e) {
    e.preventDefault();
    let inputValue = e.currentTarget.children.searchValue;
    // console.log("⭐ ~ inputValue", inputValue.value)

    if (!inputValue.value) {
      alert('Enter something to start searching');
      return;
    }

    // записываем введенный запрос в адр.строку
    setSearchParams({ query: inputValue.value.toLowerCase() });

    setSearchValue(inputValue.value.toLowerCase());
    inputValue.value = '';
  }

  // console.log(moviesList);

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
