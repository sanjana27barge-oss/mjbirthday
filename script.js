// ============================
// Loading Screen
// ============================

window.onload = function () {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 2500);

    startSlideshow();
    typeLetter();
    createBalloons();
};

// ============================
// Smooth Scroll
// ============================

function scrollToGift() {
    document.getElementById("giftSection").scrollIntoView({
        behavior: "smooth"
    });
}

// ============================
// Photo Slideshow
// ============================

const photos = [
    "mj1.jpeg",
    "mj2.jpeg",
    "mj3.jpeg",
    "mj4.jpeg",
    "mj5.jpeg",
    "mj6.jpeg"
];

const captions = [
    "Our First Memory ❤️",
    "A Day Full of Laughter 😂",
    "Best Adventure Together 🌍",
    "Unforgettable Moments ✨",
    "Happy Birthday My Best Friend 🎂"
];

let index = 0;

function startSlideshow() {

    setInterval(() => {

        index++;

        if(index >= photos.length)
            index = 0;

        document.getElementById("slideImage").src = photos[index];
        document.getElementById("caption").innerHTML = captions[index];

    },3000);

}

// ============================
// Gift Box
// ============================

// ============================
// Music
// ============================

function toggleMusic() {
    const music = document.getElementById("music");

    if (music.paused) {
        music.play().catch(error => {
            console.error("Music error:", error);
        });
    } else {
        music.pause();
    }
}

// ============================
// Gift Box
// ============================

document.getElementById("giftBox").onclick = function () {

    this.classList.add("open");

    launchHearts();

    const music = document.getElementById("music");

    music.play().catch(error => {
        console.error("Music error:", error);
    });

};
// ============================
// Hearts Animation
// ============================

function launchHearts(){

    for(let i=0;i<40;i++){

        let heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=(20+Math.random()*30)+"px";

        heart.style.animationDuration=(3+Math.random()*3)+"s";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },6000);

    }

}

// ============================
// Balloon Animation
// ============================

function createBalloons(){

    setInterval(()=>{

        let balloon=document.createElement("div");

        balloon.innerHTML="🎈";

        balloon.style.position="fixed";

        balloon.style.left=Math.random()*100+"vw";

        balloon.style.bottom="-50px";

        balloon.style.fontSize=(25+Math.random()*20)+"px";

        balloon.style.transition="8s linear";

        document.body.appendChild(balloon);

        setTimeout(()=>{

            balloon.style.bottom="110%";

        },100);

        setTimeout(()=>{

            balloon.remove();

        },9000);

    },1000);

}

// ============================
// Typewriter Letter
// ============================

const finalLetter = `

my Dear Mjjjj,

Happy Birthday!

Thank you for always being there for me in my lows and highs,

for making me laugh,

for supporting me,

and for making life brighter.

hope our bond lasts very long not only for this life time even in others love u more my dearest best friend 
  
love u to the mmoon and back my love 

you may not realize but one single message or one call from u makes my whole day...

miss you moreeee my bestest frienddd 
  
I hope every dream you have comes true.

You deserve endless happiness,

good health,

success,

and love.

May this year become your best year ever..

Happy Birthday once again!

❤️

`;

function typeLetter(){

    let i=0;

    let message=document.getElementById("message");

    message.innerHTML="";

    function typing(){

        if(i<finalLetter.length){

            message.innerHTML+=finalLetter.charAt(i);

            i++;

            setTimeout(typing,40);

        }

    }

    setTimeout(typing,3500);

}
