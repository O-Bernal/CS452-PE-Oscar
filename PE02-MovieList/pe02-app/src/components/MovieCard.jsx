import React from "react";

export default function MovieCard({ movie, onClick }) {
    return (
        <li
            className="movie-card"
            onClick={() => onClick(movie)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" ? onClick(movie) : null)}
        >
            <div className="movie-title">{movie.title}</div>
            <div className="movie-meta">
                <span className="movie-genre">{movie.genre}</span>
                <span aria-hidden="true"> • </span>
                <span className="movie-year">{movie.releaseYear}</span>
            </div>
        </li>
    );
}
