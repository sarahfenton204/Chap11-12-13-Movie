/**
 * This is the JavaScript file for controlling how movies are stored in memory and sorted
 * @author Sarah Fenton and Andrew Bartsch
 * @see {@link https://github.com/AndrewBartsch42/Chapter11-12-13-assignment}
 * @since 2026.04.15
 */

import movieStorage from 'movie_storage';

let movies = [];         // private variable

/**
 * Manages storage with sorting, deleting, and adding
 * @type {{load(): this, save(): this, add(*): this, delete(*): this, clear(): this, sortMovies(): this, [Symbol.iterator](): Generator<*, void, *>}}
 */
const movieList = {
    /**
     * Loads the movie from localStorage
     * @returns {movieList}
     */
    load() {
        movies = movieStorage.retrieve();
        return this;
    },
    /**
     * Saves the movie to localStorage
     * @returns {movieList}
     */
    save() {
        movieStorage.store(movies);
        return this;
    },
    /**
     * Adds movie to the array
     * @param movie
     * @returns {movieList}
     */
    add(movie) {
        movies.push(movie);
        return this;
    },
    /**
     * Deletes a movie at index i
     * @param i
     * @returns {movieList}
     */
    delete(i) {
        this.sortMovies(); // sort so in same order as page
        movies.splice(i, 1);
        return this;
    },
    /**
     * Clears the movies from the list and empties the array
     * @returns {movieList}
     */
    clear() {
        movies.length = 0;
        movieStorage.remove();
        return this;
    },
    /**
     * Sorts the movies by genre, rating, and title
     * @returns {movieList}
     */
    sortMovies() {
        movies.sort((a, b) => {
            return a.genre.toLowerCase().localeCompare(b.genre.toLowerCase()) || (b.rating - a.rating) || a.movieName.toLowerCase().localeCompare(b.title.toLowerCase());
        });
        return this;
    },
    *[Symbol.iterator]() { 
        for (let movie of movies) {
            yield movie;
        }
    }
};

export default movieList;