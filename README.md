# 🎬 Movie Tracker

## 📌 Overview
The Movie Tracker is a web-based application that allows users to add, view, sort, and manage a list of movies. Each movie includes a **title**, **genre**, and **rating (1–10)**. The application demonstrates the use of modern JavaScript concepts including arrays, objects, and modules.

This project is based on the Task List application from Murach’s Modern JavaScript and was fully converted into a Movie Tracker.

---

## 👩‍💻 Authors

- [Sarah Fenton](https://github.com/sarahfenton204)

- [Andrew Bartsch](https://github.com/AndrewBartsch42)

---

## 🚀 Features
- Add a movie with:
  - Title
  - Genre (dropdown selection)
  - Rating (1–10)
- Display movies in a list
- Sort movies by:
  - Genre (alphabetically)
  - Rating (descending)
  - Title (alphabetically)
- Delete selected movies
- Clear all movies
- Persistent storage using localStorage

---

## 🧠 Concepts Used

### Arrays
- Array creation and manipulation
- Sorting arrays using custom compare functions
- Iterating through arrays to display data

### Objects
- Created a `Movie` class
- Used constructors to initialize object properties
- Implemented a `toString()` method for display formatting

### Modules
- Broke code into reusable modules:
  - `movie.js` (Movie class)
  - `movie_storage.js` (localStorage handling)
  - `movie_list.js` (array logic and sorting)
- Used `import` and `export` statements
- Used an `importmap` in HTML

---

## 🛠️ Technologies Used
- HTML
- CSS
- JavaScript
- LocalStorage API

---

## 🖥️ How It Works

1. User enters a movie title
2. Selects a genre from the dropdown
3. Assigns a rating (1–10)
4. Clicks **"Add Movie"**
5. Movie is stored and displayed in the list
6. Movies are automatically sorted by:
   - Genre → Rating (descending) → Title
7. User can:
   - Delete a selected movie
   - Clear the entire list

---

## 📸 Screenshots
Movie Name Error  
![](https://github.com/AndrewBartsch42/Chapter11-12-13-assignment/blob/0ced5400baa7c5730c0d94c61d47580b3441e32d/screenshots/errorMovieName.png)    
Rating Bound Error  
![](https://github.com/AndrewBartsch42/Chapter11-12-13-assignment/blob/0ced5400baa7c5730c0d94c61d47580b3441e32d/screenshots/errorRatingBounds.png)    
Working State  
![](https://github.com/AndrewBartsch42/Chapter11-12-13-assignment/blob/0ced5400baa7c5730c0d94c61d47580b3441e32d/screenshots/everythingWorking.png)    
---

## ⚠️ Data Validation
- Movie title is required
- Rating must be between 1 and 10
- Genre is selected from predefined options

---
