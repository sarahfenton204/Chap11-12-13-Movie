/**
 * This is the JavaScript file for helping with data storage in localStorage
 * @author Sarah Fenton and Andrew Bartsch
 * @see {@link https://github.com/AndrewBartsch42/Chapter11-12-13-assignment}
 * @since 2026.04.15
 */

import * as storage from 'storage';
import movie from 'movie';

/**
 * Manages movie data
 * @type {{retrieve(): *[], store(*): void, remove(): void}}
 */
const movieStorage = {
    /**
     * Array for movie objects
     * @returns {[Movie]}
     */
    retrieve() { 
        const movies = [];
        const movieArray = storage.retrieve("movies");
        if(movieArray) {
            for(let obj of movieArray) {
                movies.push(new movie(obj.movieName, obj.genre, obj.rating)); 
            }
        }
        return movies;
    },
    /**
     * Stores movies
     * @param movies
     */
    store(movies) { 
        storage.store("movies", movies); 
    },
    /**
     * Removes movies from storage
     */
    remove() { 
        storage.remove("movies"); 
    }
};

export default movieStorage;