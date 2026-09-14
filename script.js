/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
        }, 800);

    }, 1200);

});


/* =========================
   PIN SYSTEM
========================= */

const unlockBtn = document.getElementById("unlockBtn");
const pinInput = document.getElementById("pinInput");
const pinError = document.getElementById("pinError");

const pinScreen = document.getElementById("pinScreen");
const website = document.getElementById("website");

unlockBtn.addEventListener("click", () => {

    if(pinInput.value === "1608"){

        pinScreen.style.display = "none";
        website.style.display = "block";

        pinError.innerText = "";

    }else{

        pinError.innerText = "Wrong PIN 💔";

    }

});


/* =========================
   OPEN BOOK
========================= */

const openBookBtn = document.getElementById("openBookBtn");

openBookBtn.addEventListener("click", () => {

    const music = document.getElementById("bgMusic");

    music.play();

    document.getElementById("scrapbook").scrollIntoView({
        behavior:"smooth"
    });

});


/* =========================
   LETTER OPEN
========================= */

const openLetter = document.getElementById("openLetter");
const letterPaper = document.getElementById("letterPaper");

openLetter.addEventListener("click", () => {

    if(letterPaper.style.display === "block"){

        letterPaper.style.display = "none";

    }else{

        letterPaper.style.display = "block";

        letterPaper.scrollIntoView({
            behavior:"smooth"
        });

    }

});


/* =========================
   QUIZ
========================= */

const checkQuiz = document.getElementById("checkQuiz");

checkQuiz.addEventListener("click", () => {

    const a1 = document
        .getElementById("answer1")
        .value
        .toLowerCase()
        .trim();

    const a2 = document
        .getElementById("answer2")
        .value
        .toLowerCase()
        .trim();

    const result = document.getElementById("quizResult");


    if(
        a1 === "kefash" &&
        (
            a2 === "16 agustus 2026" ||
            a2 === "16 agustus 2026"
        )
    ){

        result.style.color = "#d94f83";
        result.innerText = "Correct! Memory unlocked 💗";

        document
        .getElementById("specialMemory")
        .scrollIntoView({
            behavior:"smooth"
        });

    }else{

        result.style.color = "#ff5c8d";
        result.innerText = "Try again 🥹";

    }

});


/* =========================
   REVEAL MEMORY
========================= */

const revealBtn = document.getElementById("revealBtn");

revealBtn.addEventListener("click", () => {

    document
    .getElementById("specialPhoto")
    .classList.add("show");

});


/* =========================
   RELATIONSHIP COUNTER
========================= */

function updateCounter(){

    const startDate =
        new Date("2026-08-16T00:00:00");

    const now = new Date();

    const diff =
        now.getTime() -
        startDate.getTime();


    const days =
        Math.floor(
            diff /
            (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            diff /
            (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            diff /
            (1000 * 60)
        );


    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;

}

updateCounter();

setInterval(updateCounter,1000);


/* =========================
   SECRET MESSAGE
========================= */

const stars =
document.querySelectorAll(".secret-star");

let clickedStars = 0;

stars.forEach(star => {

    star.addEventListener("click", () => {

        if(!star.classList.contains("active")){

            star.classList.add("active");

            clickedStars++;

            star.style.transform =
            "scale(1.5)";

            star.style.opacity =
            "0.7";

        }


        if(clickedStars >= 5){

            document
            .getElementById("secretMessage")
            .style.display = "block";

            document
            .getElementById("secretMessage")
            .scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});


/* =========================
   REPLAY BUTTON
========================= */

const replayBtn =
document.getElementById("replayBtn");

replayBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


/* =========================
   ENTER KEY PIN
========================= */

pinInput.addEventListener("keypress", (e)=>{

    if(e.key === "Enter"){

        unlockBtn.click();

    }

});
