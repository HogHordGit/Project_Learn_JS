'use strict';

let flag = true;

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман!");
} else {
    console.log("Error with data");
}

console.log(personalMovieDB);