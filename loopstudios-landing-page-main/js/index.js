let imageOne = document.querySelector('.immg1');


let classic = document.querySelector('.classic');
let textGrid = document.querySelector('.text-grid');

function hover() {
    classic.classList.add('hover');
    textGrid.classList.add('color');
    
}
function notHover() {
    textGrid.classList.remove('color');
    classic.classList.remove('hover');
}


let classicOne = document.querySelector('.classicone');
let two = document.querySelector('.two')

function hoverFor() {
    classicOne.classList.add('hover');
    two.classList.add('color');
    
}
function notHoverFor() {
    two.classList.remove('color');
    classicOne.classList.remove('hover');
}


let classicTwo = document.querySelector('.classictwo');
let three = document.querySelector('.three')

function hoverForTwo() {
    classicTwo.classList.add('hover');
    three.classList.add('color');
    
}
function notHoverForTwo() {
    three.classList.remove('color');
    classicTwo.classList.remove('hover');
}

let classicThree = document.querySelector('.classicthree');
let four = document.querySelector('.four')

function hoverForThree() {
    classicThree.classList.add('hover');
    four.classList.add('color');
    
}
function notHoverForThree() {
    four.classList.remove('color');
    classicThree.classList.remove('hover');
}


let classicFour = document.querySelector('.classicfour');
let five = document.querySelector('.five')

function hoverForFour() {
    classicFour.classList.add('hover');
    five.classList.add('color');
    
}
function notHoverForFour() {
    classicFour.classList.remove('hover');
    five.classList.remove('color');
}
let classicFive = document.querySelector('.classicfive');
let six = document.querySelector('.six')

function hoverForFive() {
    classicFive.classList.add('hover');
    six.classList.add('color');

    
}
function notHoverForFive() {
    classicFive.classList.remove('hover');
    six.classList.remove('color');
}

let classicSix = document.querySelector('.classicsix');
let seven = document.querySelector('.seven')

function hoverForSix() {
    classicSix.classList.add('hover');
    seven.classList.add('color');

    
}
function notHoverForSix() {
    classicSix.classList.remove('hover');
    seven.classList.remove('color');
}

let classicSeven = document.querySelector('.classicseven');
let eight = document.querySelector('.eight')

function hoverForSeven() {
    classicSeven.classList.add('hover');
    eight.classList.add('color');

    
}
function notHoverForSeven() {
    classicSeven.classList.remove('hover');
    eight.classList.remove('color');
}


function navBarHandler(){
    let navItems = document.querySelector('.nav-items');
    let closeMenu = document.querySelector('.close-menu');

    navItems.classList.remove('for-none');
    closeMenu.classList.remove('for-none')
    
}
function navClose(){
    let navItems = document.querySelector('.nav-items');
    let closeMenu = document.querySelector('.close-menu');
    
    navItems.classList.add('for-none');
    closeMenu.classList.add('for-none')

}