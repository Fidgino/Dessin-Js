// DOM ELEMENT 

const colorButtons = document.querySelectorAll('.buttonColor');
const circleButtons = document.querySelectorAll('.displayGrid > div');
const resetButton = document.querySelector('.resetButton');
const displayActualColor = document.querySelector('.actualColor');
const buttonMoreColor = document.querySelector('.buttonMoreColor');

const chooseColorDiv = document.querySelector('#chooseColor');
const colorName = document.querySelector('.colorName');
const colorPersonalized = document.querySelector('.colorPersonalized');
const validationColor = document.querySelector('#validationButton');

// ARRAY

let colorArray = ['blue', 'green', 'yellow', 'orange', 'pink', 'red', 'purple', 'black', 'white'];

// JS

let actualColor;
let nameColor;
let Color;
for (let i = 0; i < colorButtons.length; i++) {
    colorButtons[i].addEventListener('click', () => {
        actualColor = colorArray[i];
        displayActualColor.className = 'actualColor';
        displayActualColor.classList.add(actualColor);
    });
};
for(let e = 0; e < circleButtons.length; e++) {
    circleButtons[e].addEventListener('click', () => {
        circleButtons[e].classList.add(actualColor)
    });
};
resetButton.addEventListener('click', () => {
    for(let i = 0; i < circleButtons.length; i++) {
        circleButtons[i].className = '';
    };
});

validationColor.addEventListener('click', () => {
    
})

