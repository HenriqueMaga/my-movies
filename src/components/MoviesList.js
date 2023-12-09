import { MovieItem } from "./MovieItem";

export const MoviesList = ({movies}) => (
    <section>
        <ul>
            {movies.map(m => <MovieItem id={m.title} title={m.title} />)}
        </ul>
    </section>
)