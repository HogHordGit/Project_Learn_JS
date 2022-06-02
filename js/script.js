"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let questAboutFilmName = prompt("Один из последних просмотренных фильмов?");
let questAboutFilmMark = +prompt("На сколько вы его оцените?");

let questAboutFilmName2 = prompt("Один из последних просмотренных фильмов?");
let questAboutFilmMark2 = +prompt("На сколько вы его оцените?");

personalMovieDB.movies[questAboutFilmName] = questAboutFilmMark;
personalMovieDB.movies[questAboutFilmName2] = questAboutFilmMark2;

console.log(personalMovieDB);