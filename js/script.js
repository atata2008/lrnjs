"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('How many films did you watch?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films did you watch?', '1?');
        }
    },
    resumePersonalOfFilm: function () {
        if (personalMovieDB.count > 30) {
            alert('Произошла ошибка');
            } else if (personalMovieDB.count < 10) {
            alert('Просмотрено мало фильмов');
        } else { alert('Вы классический зритель'); }
    },
    personalInformationOfFilm: function () {
        for (let i = 0; i < personalMovieDB.count && i < 3; i++) {
            const lastFilm = prompt('One from seen films?', '');
            const gradeOfFilm = prompt('What grade is for this film?', '8.0');
            if (lastFilm != null && lastFilm != '' && lastFilm.length < 50) {
                personalMovieDB.movies[lastFilm] = gradeOfFilm;
                console.log('done');
            } else { i--; }
        }
    },
    writeYourGenres: function() {
        let i = 0;
            while (i < 3) {
            let myGenre = prompt('What is your lovely genre №' + (i+1) + '?', '');
            if (myGenre != null && myGenre != '') {
                personalMovieDB.genres[i] = myGenre;
            }
            i++;
        }
        personalMovieDB.genres.forEach((item,i) => {
        console.log(`Любимый жанр № ${i + 1} => ${item}`);
        });
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if  (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
    }
}
};

