/* Imports */

import { renderPest } from './render-utils.js';

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

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(formEl);

    const pestName = data.get('pest-name');

    const newPest = {
        id: currentId,
        name: pestName,
        hp: Math.ceil(Math.random() * 5),
    };
    currentId++;
    pests.push(newPest);
    displayPests();
});

/* Display Functions */

function displayPests() {
    pestsListEl.textContent = '';

    for (let pest of pests) {
        const pestEl = renderPest(pest);
        pestEl.addEventListener('click', () => {
            pestClickHandler(pest);
        });
        pestsListEl.append(pestEl);
    }
}

// (don't forget to call any display functions you want to run on page load!)
displayPests();
