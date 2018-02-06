'use strict';

//construct store object
const hours = ['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am', '11:00 am', '12:00 pm',
    '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm', 'Daily Location Total:'];

function Stand (id,title,min,max,avg){
    this.id = id;
    this.title = title;
    this.minCust = min;
    this.maxCust = max;
    this.cookiesAvg = avg;
    this.daySales = [];
    this.totalSales = 0;

    this.custCount = function () {
        for (let i = 0; i < 15; i++){
            const randCust = Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
            const cookiesHour = Math.round(this.cookiesAvg * randCust);
            this.daySales.push(cookiesHour);
            this.totalSales += cookiesHour;
        }
        console.log(this.daySales);
        console.log(`Hourly sales for ${this.id}: ${this.totalSales}`);
    };
    this.custCount();
}

// make each instance

const airport = new Stand('airport', 'PDX Airport', 23, 65, 6.3);
const pioneer = new Stand('pioneer', 'Pioneer Place', 3, 24, 1.2);
const powells = new Stand('powells', 'Powell\'s', 11, 38, 3.7);
const stJohns = new Stand('stJohns', 'St. John\'s', 20, 38, 2.3);

let stands = [airport, pioneer, powells, stJohns];

//print current stands

const tableHead = function () {
    (document.querySelector('#header')).appendChild(document.createElement('tr'));
    const tableId = document.querySelector('#header tr');
    const newTh = document.createElement('th');
    tableId.appendChild(newTh);
    for (let i = 0; i < hours.length; i++){
        const newTh = document.createElement('th');
        newTh.textContent = `${hours[i]}`;
        tableId.appendChild(newTh);
    }
};
tableHead();

const tableSales = function () {
    (document.querySelector('#sales')).appendChild(document.createElement('tr'));
    const tableId = document.querySelector('#sales tr');
    const rowHead = document.createElement('th');
    rowHead.textContent = `${stands[1].title}`;
    tableId.appendChild(rowHead);
};
tableSales();



// function printList(store){
//     for (let i = 0; i < store.daySales.length; i++){
//         const printHour = document.createElement('li');
//         printHour.textContent = hours[i] + store.daySales[i] + ' cookies';
//         const storeList = document.getElementById(store.id);
//         storeList.appendChild(printHour);
//     }
// }