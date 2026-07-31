// ==========================
// GET ELEMENTS
// ==========================

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const envelope = document.getElementById("openLetter");
const closeLetter = document.getElementById("closeLetter");

// ==========================
// FADE TRANSITIONS
// ==========================

function showScreen(nextScreen){

    const screens = [screen1, screen2, screen3];

    screens.forEach(screen => {

        screen.style.opacity = "0";

        setTimeout(() => {

            screen.classList.remove("active");

        },300);

    });

    setTimeout(() => {

        nextScreen.classList.add("active");

        nextScreen.style.opacity = "0";

        setTimeout(() => {

            nextScreen.style.opacity = "1";

        },30);

    },300);

}

// ==========================
// YES BUTTON
// ==========================

yesBtn.addEventListener("click", () => {

    showScreen(screen2);

});

// ==========================
// NO BUTTON
// ==========================

function moveButton(){

    const maxX = window.innerWidth - noBtn.offsetWidth - 40;
    const maxY = window.innerHeight - noBtn.offsetHeight - 40;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

}

noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("touchstart", moveButton);

// ==========================
// ENVELOPE ANIMATION
// ==========================

envelope.addEventListener("click", () => {

    envelope.style.transition = "0.5s";

    envelope.style.transform =
        "translateY(-15px) rotate(-8deg) scale(1.1)";

    envelope.style.opacity = "0.6";

    setTimeout(() => {

        showScreen(screen3);

        envelope.style.transform = "";
        envelope.style.opacity = "1";

    },600);

});

// ==========================
// CLOSE LETTER
// ==========================

closeLetter.addEventListener("click", () => {

    showScreen(screen2);

});

// ==========================
// RESET BUTTON
// ==========================

window.addEventListener("resize", () => {

    noBtn.style.position = "";
    noBtn.style.left = "";
    noBtn.style.top = "";

});
