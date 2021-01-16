"use strict";

const numberOfFilms = +prompt('What films did your watch?', '1');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const lastFilm = prompt('One from seen films?', 'Avatar?))');
const gradeOfFilm = prompt('What grade is for this film?', '8.0');
personalMovieDB.movies[lastFilm] = gradeOfFilm;
console.log(personalMovieDB);