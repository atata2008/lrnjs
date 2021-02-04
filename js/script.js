"use strict";

const numberOfFilms = +prompt('How many films did you watch?', '10?');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
if (personalMovieDB.count > 30) {
    alert('Произошла ошибка');
    } else if (personalMovieDB.count < 10) {
    alert('Просмотрено мало фильмов');
} else { alert('Вы классический зритель'); }

for (let i = 0; i < 8; i++) {
    const lastFilm = prompt('One from seen films?', '');
    const gradeOfFilm = prompt('What grade is for this film?', '8.0');
    if (lastFilm != null && lastFilm != '' && lastFilm.length < 50) {
        personalMovieDB.movies[lastFilm] = gradeOfFilm;
        console.log('done');
    } else { i--; }
}
console.log(personalMovieDB);