'use strict';

//construct store object
function Stand (id,title,min,max,avg){
    this.id = id;
    this.title = title;
    this.minCust = min;
    this.maxCust = max;
    this.cookiesAvg = avg;
    this.daySales = [];
    this.totalSales = 0;
};

Stand.prototype.custCount = function () {
    for (let i = 0; i < 15; i++){
        const randCust = Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
        const cookiesHour = Math.round(this.cookiesAvg * randCust);
        this.daySales.push(cookiesHour);
        this.totalSales += cookiesHour;
    }
    console.log(this.daySales);
    console.log(`Hourly sales for ${this.id}: ${this.totalSales}`);
    this.daySales.push(this.totalSales);
};

Stand.prototype.render = function () {
    let newRow = document.createElement('tr');

    const rowHead = document.createElement('th');
    rowHead.textContent = `${this.title}`;
    newRow.appendChild(rowHead);

    for (let i = 0; i < this.daySales.length; i++){
        const newTd = document.createElement('td');
        newTd.textContent = this.daySales[i];
        newRow.appendChild(newTd);

        hourlyTotals[i + 1] += this.daySales[i];
    }
    return newRow;
};

// make each instance

const airport = new Stand('airport', 'PDX Airport', 23, 65, 6.3);
const pioneer = new Stand('pioneer', 'Pioneer Place', 3, 24, 1.2);
const powells = new Stand('powells', 'Powell\'s', 11, 38, 3.7);
const stJohns = new Stand('stJohns', 'St. John\'s', 20, 38, 2.3);
const waterfront = new Stand('waterfront', 'The Waterfront', 2, 16, 4.6);

let stands = [airport, pioneer, powells, stJohns, waterfront];
let hourlyTotals = ['Hourly Totals:',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const hours = ['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am', '11:00 am', '12:00 pm',
    '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm', 'Daily Location Total:'];

//print current stands
buildTable();

//functions
function tableHead() {
    (document.querySelector('#header')).appendChild(document.createElement('tr'));
    const tableId = document.querySelector('#header tr');
    const newTh = document.createElement('th');
    tableId.appendChild(newTh);
    for (let i = 0; i < hours.length; i++){
        const newTh = document.createElement('th');
        newTh.textContent = hours[i];
        tableId.appendChild(newTh);
    }
};

function tableFoot() {
    (document.querySelector('#footer')).appendChild(document.createElement('tr'));
    const tFoot = document.querySelector('#footer tr');

    const rowHead = document.createElement('th');
    rowHead.textContent = hourlyTotals[0];
    tFoot.appendChild(rowHead);    // const rowHead = document.createElement('th');
    rowHead.textContent = hourlyTotals[0];
    tFoot.appendChild(rowHead);

    for (let i = 1; i < hourlyTotals.length; i++){
        const newTd = document.createElement('td');
        newTd.textContent = hourlyTotals[i];
        tFoot.appendChild(newTd);
    }
};

function buildTable() {
    tableHead();
    const tBody = document.querySelector('#sales');

    for (let i = 0; i < stands.length; i++){
        stands[i].custCount();
        tBody.appendChild(stands[i].render());
    };

    tableFoot();
};

