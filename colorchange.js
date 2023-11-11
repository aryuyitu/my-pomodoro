const main = document.querySelector("#main");
const container = document.querySelector("#container");
const body = document.querySelector("body");
var clrbtn_list = document.querySelectorAll(".color-button"); //this puts every color btn into a node list
var clrbtn_array = [...clrbtn_list]; //this uses spread syntax to convert NodeList to an array

var timerbtn_list = document.querySelectorAll(".timer-button");
var timerbtn_array = [...timerbtn_list];
var navbtn_list = document.querySelectorAll(".nav-button");
var navbtn_array = [...navbtn_list];

let mainStudyBgColor; //main is the inner box
let mainBreakBgColor; 
let bodyStudyBgColor; //body is the background
let bodyBreakBgColor;
let textBreakColor;
let textStudyColor;

class ColorButton { //this is the color button class, which can house the color information for each color button
    constructor(boxColor,backgroundColor,textColor){
        this.boxColor = boxColor;
        this.backgroundColor = backgroundColor;
        this.textColor = textColor
    }
}
//here is a list of all the buttons and their colors and classes
const clrbtn1 = new ColorButton('rgb(255, 255, 255)','rgb(244,244,244)','black');       //offwhite
const clrbtn2 = new ColorButton('rgb(234,210,186)','rgb(178,192,175)','black');         //green + dusty pink
const clrbtn3 = new ColorButton('rgba(56,71,94,255)','rgba(200,196,197,255)','white');  //Navy Blue + Grey
const clrbtn4 = new ColorButton('rgba(137,168,151,255)','rgba(228,217,199,255)','black'); //Beige/tan + sea green
const clrbtn5 = new ColorButton('rgba(227,230,235,255)','rgba(236,192,155,255)','black'); //light grey + Pale orange
const clrbtn6 = new ColorButton('rgba(249,249,249,255)','rgba(160,101,59,255)','black');  //light grey + brown
const clrbtn7 = new ColorButton('rgba(183,172,172,255)','rgba(98,88,79,255)','white');  //Dark grey + taupe
const clrbtn8 = new ColorButton('rgb(255,226,235)','rgb(154,159,179)','black');           //Light Lavender + Greyish blue

const colorMap = new Map(); //this will be the map that maps a string to an object

colorMap.set('clrbtn1',clrbtn1);
colorMap.set('clrbtn2',clrbtn2);
colorMap.set('clrbtn3',clrbtn3);
colorMap.set('clrbtn4',clrbtn4);
colorMap.set('clrbtn5',clrbtn5);
colorMap.set('clrbtn6',clrbtn6);
colorMap.set('clrbtn7',clrbtn7);
colorMap.set('clrbtn8',clrbtn8);

//the code written here will set the colors of the buttons based on the classname

clrbtn_array.forEach(btn => { //this is setting the styles for all the color buttons
    const classNames = btn.className.split(' ');
    btn.style.background = getColorBackground(colorMap.get(classNames[1]));
});

function getColorBackground(clrbtn){ //pass the colorbutton object as param, returns the background gradient
    return ('radial-gradient('+ clrbtn.boxColor + ' 0%,'+ clrbtn.boxColor + ' 40%,'+ clrbtn.backgroundColor + ' 40%,'+ clrbtn.backgroundColor + ' 100%)');
}

//here are the functions that will be changing the colors
function setStudyColor(btnNum) {
    mainStudyBgColor = colorMap.get(btnNum).boxColor;
    bodyStudyBgColor = colorMap.get(btnNum).backgroundColor;
    textStudyColor = colorMap.get(btnNum).textColor;
}

function setBreakColor(btnNum) {
    mainBreakBgColor = colorMap.get(btnNum).boxColor;
    bodyBreakBgColor = colorMap.get(btnNum).backgroundColor;
    textBreakColor = colorMap.get(btnNum).textColor;
}

function setBtnClr(btn,textColor,bgColor){ //this function will only be called by the "set" functions
    btn.style.background = bgColor;
    btn.style.color = textColor;
}

function refreshColor(){ //this function refreshes the color
    if (studying){ //studying var comes from timer.js
        main.style.backgroundColor = mainStudyBgColor;
        body.style.backgroundColor = bodyStudyBgColor;
        main.style.color = textStudyColor;
        timerbtn_array.forEach(btn =>{
            setBtnClr(btn,textStudyColor,bodyStudyBgColor);
        });
        navbtn_array.forEach(btn =>{
            setBtnClr(btn,textStudyColor,mainStudyBgColor);
        });
    } else {
        main.style.backgroundColor = mainBreakBgColor;
        body.style.backgroundColor = bodyBreakBgColor;
        main.style.color = textBreakColor;
        timerbtn_array.forEach(btn =>{
            setBtnClr(btn,textBreakColor,bodyBreakBgColor);
        });
        navbtn_array.forEach(btn =>{
            setBtnClr(btn,textBreakColor,mainBreakBgColor);
        });
    }
}