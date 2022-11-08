/* Imports */

/* Get DOM Elements */
const pestsListEl = document.querySelector('.pests');
const formEl = document.querySelector('form');
const exterminatorHPEl = document.querySelector('#exterminator-hp');
const killedPestsEl = document.querySelector('#kill-count');
const exterminatorImgEl = document.querySelector('#exterminator-img');
/* State */

const pests = [
    {
        id: 1,
        name: 'Creepy',
        hp: 1,
    },
    {
        id: 2,
        name: 'Crawly',
        hp: 2,
    },
    {
        id: 3,
        name: 'Stinky',
        hp: 3,
    },
];

let currentId = 4;
let exterminatorHP = 10;
let killCount = 0;

/* Events */

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
