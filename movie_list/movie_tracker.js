/**
 * This is the JavaScript file that is the main controller that connects the HTML with the data
 * @author Sarah Fenton and Andrew Bartsch
 * @see {@link https://github.com/AndrewBartsch42/Chapter11-12-13-assignment}
 * @since 2026.04.15
 */

import movieList from "movie_list";
import movie from "movie";
import * as dom from "DOM";
/**
 * displays the current movies from the list of movies
 */
const displaymovies = () => {
    movieList.sortMovies();

    const select = dom.get("#movies");
    select.textContent = "";  // clear previous movies

    for (let movie of movieList) {   
        const opt = document.createElement("option");
        opt.appendChild(document.createTextNode(movie));
        select.appendChild(opt);
    }  
    dom.focus("#movie");
}
/**
 * loads the inputed movie into the movies list and checks 
 */
dom.load(() => {
    dom.addClick("#add_movie", () => {
        dom.clear("#msg");             // clear any previous message
        
        const newmovie = new movie(
            dom.getValue("#movie"),
            dom.getValue("#genre"),
            dom.getValue("#rating")
        );  
        
        let message = "";
        if (newmovie.movieName === "") {
            message = "Movie is required. ";
        }
        //if (newmovie.hasInvalidDueDate || newmovie.isPastDue) {
        //    message += "Due Date must be a valid date in the future."
        //} 
        if (newmovie.rating < 1 || newmovie.rating > 10){
            message = "Movie rating must be between 1 and 10";
        }

        if (message === "") {
            movieList.load().add(newmovie).save();
            dom.clear("#movie");
            //dom.clear("#due_date");
            displaymovies();
        } else {
            dom.setText("#msg", message);
            dom.select("#movie");
        }     
    });
    /**
     * clears the movies from the list of current movies
     */
    dom.addClick("#clear_movies", () => {
        movieList.clear();
        dom.clear("#movies");
        dom.clear("#movie");
        //dom.clear("#due_date");
        dom.clear("#msg");
        dom.focus("#movie");
    });  
    /**
     * deletes a selected movie from the list of current movies
     */
    dom.addClick("#delete_movie", () => {
        dom.clear("#msg");             // clear any previous message
        
        const index = dom.get("#movies").selectedIndex;
        if (index === -1) {
            dom.setText("#msg", "Please select a movie to delete.");
        } else {
            movieList.load().delete(index).save();
            displaymovies();
        }
    });
    movieList.load()
    displaymovies();
});