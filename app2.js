'use strict';

// links

const links = document.links;
const linkLogo = links[0];
const linkAbout = links[1];
const linkLocations = links[2];
const linkContact = links[3];

const about = document.getElementById('about');
const locations = document.getElementById('locations');
const contact = document.getElementById('contact');


linkLocations.addEventListener('click', function (){
    event.preventDefault();
    locations.style.display = 'flex';
    about.setAttribute('style', 'display: none');
    contact.setAttribute('style', 'display: none');
});

linkAbout.addEventListener('click', function (){
    event.preventDefault();
    about.style.display = 'block';
    locations.setAttribute('style', 'display: none');
    contact.setAttribute('style', 'display: none');
});

linkLogo.addEventListener('click', function (){
    event.preventDefault();
    about.style.display = 'block';
    locations.setAttribute('style', 'display: none');
    contact.setAttribute('style', 'display: none');
});

linkContact.addEventListener('click', function (){
    event.preventDefault();
    contact.style.display = 'block';
    locations.setAttribute('style', 'display: none');
    about.setAttribute('style', 'display: none');
});


// Location page
const pics = ['images/loc1.jpg', 'images/loc2.jpg', 'images/loc3.jpg', 'images/loc4.jpg', 'images/loc5.jpg'];
const stands = ['PDX Airport', 'Pioneer Place', 'Powell\'s', 'St. John\'s', 'The Waterfront'];

buildLoc ();

function buildLoc (){

    for (let i = 0; i < stands.length; i++){
        const card = document.createElement('section');
        card.classList.add('card');

        const imgCon = document.createElement('div');
        imgCon.classList.add('imgCon');
        imgCon.setAttribute('style', `background-image: url(${pics[i]}); background-size: cover;`);
        card.appendChild(imgCon);

        const title = document.createElement('h2');
        title.textContent = stands[i];
        card.appendChild(title);

        const string = document.createTextNode('Open 6am - 8pm M-F!');
        card.appendChild(string);

        locations.appendChild(card);
    }
}

