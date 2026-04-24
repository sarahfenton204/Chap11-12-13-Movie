# 🎬 Movie Tracker

## 👩‍💻 Authors
- [Sarah Fenton](https://github.com/sarahfenton204)
- [Andrew Bartsch](https://github.com/AndrewBartsch42)

---

## 📚 Table of Contents
- [📄 Project Overview](#-project-overview)
- [🧰 Tech Stack](#-tech-stack)
- [🛠️ Development Tools](#️-development-tools)
- [🧠 Core Concepts / New Concepts](#-core-concepts--new-concepts)
- [✨ Features](#-features)
- [⚙️ How It Works](#️-how-it-works)
- [🖼️ Visual Aids](#️-visual-aids)
- [🧪 Data Validation](#-data-validation)
- [💡 Reflection: What I Learned](#-reflection-what-i-learned)

---

## 📄 Project Overview

The Movie Tracker is a web-based application that allows users to add, view, sort, and manage a list of movies 🎬  

Each movie includes a **title**, **genre**, and **rating (1–10)**. This project demonstrates modern JavaScript concepts such as arrays, objects, and modules.

It is based on the Task List application from *Murach’s Modern JavaScript* and was fully redesigned into a Movie Tracker.

---

## 🧰 Tech Stack

| Technology | Purpose |
|-----------|--------|
| HTML      | Structure of the application |
| CSS       | Styling and layout |
| JavaScript| Logic, interactivity, and data handling |
| LocalStorage API | Persistent data storage |

---

## 🛠️ Development Tools

| Tool | Description |
|-----|------------|
| Web Storm | Code editor |
| Web Browser | Testing and execution |
| GitHub | Version control and hosting |

---

## 🧠 Core Concepts / New Concepts

### 📦 Arrays
- Creating and managing arrays  
- Sorting arrays with custom compare functions  
- Iterating through arrays to display data  

---

### 🧱 Objects
- Creating a `Movie` class  
- Using constructors to initialize properties  
- Implementing a `toString()` method for formatting  

---

### 🧩 Modules
- Splitting code into reusable modules:
  - `movie.js` (Movie class)  
  - `movie_storage.js` (localStorage handling)  
  - `movie_list.js` (array logic and sorting)  
- Using `import` and `export`  
- Implementing an `importmap` in HTML  

---

## ✨ Features

- Add movies with:
  - Title  
  - Genre (dropdown)  
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

## ⚙️ How It Works

1. User enters a movie title  
2. Selects a genre  
3. Assigns a rating (1–10)  
4. Clicks **"Add Movie"**  
5. Movie is stored and displayed  
6. Movies are automatically sorted by:
   - Genre → Rating (descending) → Title  
7. User can:
   - Delete a selected movie  
   - Clear the entire list  

---

## 🧪 Data Validation

- Movie title is required  
- Rating must be between 1 and 10  
- Genre must be selected from predefined options  

---

## 🖼️ Visual Aids

### ⚠️ Movie Name Error
![](https://github.com/AndrewBartsch42/Chapter11-12-13-assignment/blob/0ced5400baa7c5730c0d94c61d47580b3441e32d/screenshots/errorMovieName.png)  
<br><br>

### ⚠️ Rating Bounds Error
![](https://github.com/AndrewBartsch42/Chapter11-12-13-assignment/blob/0ced5400baa7c5730c0d94c61d47580b3441e32d/screenshots/errorRatingBounds.png)  
<br><br>

### ✅ Working State
![](https://github.com/AndrewBartsch42/Chapter11-12-13-assignment/blob/0ced5400baa7c5730c0d94c61d47580b3441e32d/screenshots/everythingWorking.png)  

---

## 💡 Reflection: What I Learned

Through this project, I strengthened my understanding of object-oriented programming in JavaScript by creating and using a custom `Movie` class. I also gained experience organizing code into modules, which improved readability and maintainability.

Additionally, I practiced sorting complex data structures and working with localStorage to persist data across sessions. This project helped reinforce how to build scalable, well-structured web applications.

---

[⬆ Back to TOC](#-table-of-contents)
