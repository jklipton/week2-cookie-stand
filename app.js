'use strict';

const hours = ['6am: ','7am: ','8am: ','9am: ','10am: ', '11am: ', '12pm: ',
    '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8am: ', 'Total: '];

//Stores
const airport = {
    id: 'airport',
    minCust: 23,
    maxCust: 65,
    cookiesAvg: 6.3,
    cookiesHour: [],

    custCount : function () {
        const randCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1));
        return randCust;
    }
};

const pioneer = {
    id: 'pioneer',
    minCust: 3,
    maxCust: 24,
    cookiesAvg: 1.2,
    cookiesHour: [],

    custCount : function () {
        const randCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1));
        return randCust;
    }
};

const powells = {
    id: 'powells',
    minCust: 11,
    maxCust: 38,
    cookiesAvg: 3.7,
    cookiesHour: [],

    custCount : function () {
        const randCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1));
        return randCust;
    }
};

const stJohns = {
    id: 'stJohns',
    minCust: 20,
    maxCust: 38,
    cookiesAvg: 2.3,
    cookiesHour: [],

    custCount : function () {
        const randCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1));
        return randCust;
    }
};

const waterfront = {
    id: 'waterfront',
    minCust: 2,
    maxCust: 16,
    cookiesAvg: 4.6,
    cookiesHour: [],

    custCount : function () {
        const randCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1));
        return randCust;
    }
};

//Calculate Day Sales
daySales(airport);
daySales(pioneer);
daySales(powells);
daySales(stJohns);
daySales(waterfront);

printList(airport);
printList(pioneer);
printList(powells);
printList(stJohns);
printList(waterfront);


function daySales(store){
    for (let i = 0; i < 15; i++){
        const cookiesSale = Math.floor(store.cookiesAvg * store.custCount());
        store.cookiesHour.push(cookiesSale);
    }
    store.cookiesHour.push(total(store));
    console.log(store.id + store.cookiesHour);
}

function printList(store){
    for (let i = 0; i < store.cookiesHour.length; i++){
        const printHour = document.createElement('li');
        printHour.textContent = hours[i] + store.cookiesHour[i] + ' cookies';
        const storeList = document.getElementById(store.id);
        storeList.appendChild(printHour);
    }
}

function total(store){
    const total = store.cookiesHour.reduce(function (a,b){
        return a + b;
    }, 0);
    return total;
};

//     const printHour = document.createElement('li');
//     printHour.textContent = i + 'am: ' + cookiesSale + 'cookies.';
//     const storeList = document.getElementById(store.name);
//     storeList.appendChild(printHour);
//     }
//     console.log(store.cookiesHour);
// };
// const storeList = document.getElementbyId('lists');
// const printHour = document.createElement('li');
// printHour.textContent = store1.cookiesHour[1];
// storeList.appendChild(printHour); }