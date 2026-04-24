/**
 * This is the JavaScript file for defining the movie class
 * @author Sarah Fenton and Andrew Bartsch
 * @see {@link https://github.com/AndrewBartsch42/Chapter11-12-13-assignment}
 * @since 2026.04.15
 */

/**
 * Defines the class "movie" and runs when a new movie is created
 */
class movie {
    constructor(movieName, genre, rating) {
        this.movieName = movieName;
        this.genre = genre;
        this.rating = rating;
        //this.dueDate = new Date(dueDate);
    }

    /**
     * Displays the movie as text in a string
     * @returns {string}
     */
    toString() {
        return `${this.movieName} | ${this.genre} | Rating: ${this.rating}`;
    }
}

export default movie;