import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { MoviesService } from "../api/MoviesService";
import { MovieDetailContainer } from "../style/MovieDetailConteiner";

export const MovieDetail = () => {
    const { id } = useParams();

    const [movie, setMovie] = useState([]);

    const fetchMovies = async () => {
        const { data } = await MoviesService.getMovieById(id);
        setMovie(data);
        console.log(data);
    }
    useEffect(() => {
        fetchMovies(); 
    }, []);
    return (
        <MovieDetailContainer>
            <h1>{movie.title}</h1>
            <img
            class="fit-picture"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title} />
            <article>
                {movie.overview}
            </article>
        </MovieDetailContainer>
    )
}