'use strict';

let numberOfFilms;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "").trim();

        while(personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
        console.log(personalMovieDB.count);
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const questLastFilm = prompt("Один из последних просмотренных фильмов?", "").trim();
            const questMarkFilm = +prompt("На сколько оцените его?", "").trim();
        
            if (questLastFilm != null && questMarkFilm != null && questLastFilm != "" && 
            questMarkFilm != "" && questLastFilm.length < 50) {
                personalMovieDB.movies[questLastFilm] = questMarkFilm;
                console.log("Data has been added");
            } else {
                console.log("Error with data");
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            alert("Вы киноман!");
        } else {
            console.log("Error with data");
        }
    },
    showMyDB: function(privat) {
        if (!privat) {
            console.log("Main object: ");
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        // for (let i = 0; i <= 2; i++) {
        //     let questOfGenre = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");

        //     if (questOfGenre === null || questOfGenre === "") {
        //         console.log("Arror with data");
        //         i--;
        //     } else {
        //         personalMovieDB.genres[i] = questOfGenre;
        //     }

        // }

        let questOfGenre = prompt("Введите ваши любимые жанры через запятую", "").toLowerCase();

            if (questOfGenre === null || questOfGenre === "") {
                console.log("Arror with data");
                i--;
            } else {
                personalMovieDB.genres = questOfGenre.split(", ");
                personalMovieDB.genres.sort();
            }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр №${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

personalMovieDB.writeYourGenres();

console.log(personalMovieDB.genres);


