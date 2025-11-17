# PE02 - Movie List App IPO Analysis

**Purpose:** A simple React app that displays a list of movies and lets users filter by genre and click a movie to view its title.

## Input

* **Static data:** Array of movie objects (`id`, `title`, `genre`, `releaseYear`) from `src/data/movies.js`.
* **User selections:** Dropdown choice for **genre** (“All Genres” or a specific genre).
* **User events:** Click on a movie card.

## Process

* **State management:** `MovieList.jsx` uses `useState` to track `selectedGenre` (and initialize `movies`).
* **Derivations:** `useMemo` computes

  1. **unique genres** for the dropdown, and
  2. the **filtered list** based on `selectedGenre`.
* **Event handling:**

  * `onChange` on the `<select>` updates `selectedGenre`.
  * `onClick` on a movie card triggers `alert(movie.title)`.
* **Component structure:**

  * `MovieList` (main): filter UI + movie grid.
  * `MovieCard` (presentational): renders a single movie.
  * `App.js` renders `MovieList`.

## Output

* **UI:** A centered list of movie **cards** showing **Title • Genre • Year**.
* **Filter behavior:** Dropdown limits the visible movies to the selected genre; “All Genres” shows all.
* **Feedback:** Clicking a movie displays an alert with the movie’s title.
