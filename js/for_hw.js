'use strict';

let flag = true;

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    }
}

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        flag = true;
    
        const questLastFilm = prompt("Один из последних просмотренных фильмов?");
        const questMarkFilm = prompt("На сколько оцените его?");
    
        if (questLastFilm != null && questMarkFilm != null && questLastFilm != "" && 
        questMarkFilm != "" && questLastFilm.length < 50) {
            personalMovieDB.movies[questLastFilm] = questMarkFilm;
            console.log("Date has been added");
        } else {
            console.log("Error with data");
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel(count) {
    if (count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (count >= 10 && count <= 30) {
        alert("Вы классический зритель");
    } else if (count > 30) {
        alert("Вы киноман!");
    } else {
        console.log("Error with data");
    }
}

// detectPersonalLevel(personalMovieDB.count);

function showMyDB(privat) {
    if (!privat) {
        console.log("Main object: ");
        console.log(personalMovieDB);
    }
}

// showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
    }
}

writeYourGenres();

console.log(personalMovieDB);

