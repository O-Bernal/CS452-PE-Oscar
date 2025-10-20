import React, { useMemo, useState } from "react";
import MovieCard from "./MovieCard";
import { movies as seedMovies } from "../data/movies";

export default function MovieList() {
    // Stateful component: manage both the movie list and selected genre
    const [movies] = useState(seedMovies);
    const [selectedGenre, setSelectedGenre] = useState("All Genres");

    // Unique genres for the dropdown (computed)
    const genres = useMemo(() => {
        const uniq = Array.from(new Set(movies.map((m) => m.genre))).sort();
        return ["All Genres", ...uniq];
    }, [movies]);

    // Filtered list based on selected genre (computed)
    const filtered = useMemo(() => {
        if (selectedGenre === "All Genres") return movies;
        return movies.filter((m) => m.genre === selectedGenre);
    }, [movies, selectedGenre]);

    // Click handler: alert movie title
    function handleMovieClick(movie) {
        alert(movie.title);
    }

    return (
        <div className="movie-list">
            <h1>Movie List</h1>

            <label htmlFor="genre-select" className="filter-label">
                Filter by Genre:
            </label>
            <select
                id="genre-select"
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="genre-select"
            >
                {genres.map((g) => (
                    <option key={g} value={g}>
                        {g}
                    </option>
                ))}
            </select>

            <ul className="movie-grid">
                {filtered.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} onClick={handleMovieClick} />
                ))}
            </ul>
        </div>
    );
}
