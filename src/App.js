import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { MoviesList } from "./components/MoviesList";
import { MoviesContainer } from "./style/MoviesContainer";
import { MoviesService } from "./api/MoviesService";

function App() {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    const { data } = await MoviesService.getMovies();
    setMovies(data.results);
    console.log(data);
  }
  useEffect(() => {
    fetchMovies(); 
  }, []);

  return (
    <div className="App">
      <Header/>

      <MoviesContainer>
        <MoviesList movies={movies} />
      </MoviesContainer>
    </div>
  );
}

export default App;
