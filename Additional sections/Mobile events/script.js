//touchstart
//touchend
//touchmove

//touchenter
//touchleave
//touchcancel

document.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector(".box");

    box.addEventListener("touchstart", (event) => {
        event.preventDefault();

        console.log("Start");
        console.log(event.targetTouches);
    });

    box.addEventListener("touchmove", (event) => {
        event.preventDefault();

        console.log(event.targetTouches[0].pageX);
    });

    // box.addEventListener("touchend", (event) => {
    //     event.preventDefault();

    //     console.log("End");
    // });
});

//touches сколько пальцев трогают экран
//targetTouches на конкретном объекте
//changedTouches пальцы, которые участвуют в событии



