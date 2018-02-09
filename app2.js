'use strict';

const pics = ['images/loc1.jpg', 'images/loc2.jpg', 'images/loc3.jpg', 'images/loc4.jpg', 'images/loc5.jpg'];
const stands = ['PDX Airport', 'Pioneer Place', 'Powell\'s', 'St. John\'s', 'The Waterfront'];

function buildLoc (){
    const section = document.getElementById('container');

    for (let i = 0; i < stands.length; i++){
        const card = document.createElement('section');
        card.classList.add('store');

        const img = document.createElement('img');
        img.src = pics[i];
        card.appendChild(img);

        const title = document.createElement('h2');
        title.textContent = stands[i];
        card.appendChild(title);

        const string = document.createTextNode('Open 6am - 8pm M-F!');
        card.appendChild(string);

        section.appendChild(card);
    }
}

buildLoc();

