const allSections = document.querySelectorAll(".section");
const study = document.querySelector("#study");
const colors = document.querySelector("#color-section");
const settings = document.querySelector("#settings");

function changeTo(section){
    allSections.forEach(section => {section.style.display = "none";});
    section.style.display = "block";
}