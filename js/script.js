"use strict";

let numberOfFilms;
function start() {
    numberOfFilms = +prompt('How many films did you watch?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films did you watch?', '1?');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function resumePersonalOfFilm() {
    if (personalMovieDB.count > 30) {
        alert('Произошла ошибка');
        } else if (personalMovieDB.count < 10) {
        alert('Просмотрено мало фильмов');
    } else { alert('Вы классический зритель'); }
}

resumePersonalOfFilm();

function personalInformationOfFilm() {
    for (let i = 0; i < personalMovieDB.count && i < 3; i++) {
        const lastFilm = prompt('One from seen films?', '');
        const gradeOfFilm = prompt('What grade is for this film?', '8.0');
        if (lastFilm != null && lastFilm != '' && lastFilm.length < 50) {
            personalMovieDB.movies[lastFilm] = gradeOfFilm;
            console.log('done');
        } else { i--; }
    }
}

personalInformationOfFilm();

function writeYourGenres() {
    let i = 0;
        while (i < 3) {
        let myGenre = prompt('What is your lovely genre №' + (i+1) + '?', '');
        if (myGenre != null && myGenre != '') {
            personalMovieDB.genres[i] = myGenre;
        }
        i++;
    }

}
writeYourGenres();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

