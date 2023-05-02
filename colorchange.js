const main = document.querySelector("#main");
const body = document.querySelector("body");
let mainStudyColor;
let mainBreakColor;
let bodyStudyColor;
let bodyBreakColor;

function setStudyColor(mainColor,bodyColor) {
    mainStudyColor = mainColor;
    bodyStudyColor = bodyColor;
}

function setBreakColor(mainColor,bodyColor) {
    mainBreakColor = mainColor;
    bodyBreakColor = bodyColor;
}

function refreshColor(){
    if (studying){
        main.style.backgroundColor = mainStudyColor;
        body.style.backgroundColor = bodyStudyColor;
    } else {
        main.style.backgroundColor = mainBreakColor;
        body.style.backgroundColor = bodyBreakColor;
    }
}