// Carousel
let container = document.getElementById('carousel_container');
let startValue = container.dataset.value;
let leftArrow = document.querySelector('#leftArrow');
let rightArrow = document.querySelector("#rightArrow");
let imageSlides = document.querySelectorAll(".slides");

function carouselSlides(index)
{
    if (index > imageSlides.length)
    {
        startValue = 1;
    }
    if (index <= 0)
    {
        startValue = imageSlides.length;
    }
    imageSlides.forEach(image =>
    {
        image.style.display = "none";
    });
    imageSlides[startValue-1].style.display = "block";
}
carouselSlides(startValue);
leftArrow.addEventListener("click", function () {
    carouselSlides(startValue -= 1);
});
rightArrow.addEventListener("click", function () {
    carouselSlides(startValue += 1);
});


// tabs



// customer counter
let ticketTarget = document.querySelector('#ticketsSold');
let ticketsSold = parseInt(ticketTarget.innerHTML);
let visitTarget = document.querySelector('#pageVisits');
let pageVisits = parseInt(visitTarget.innerHTML);

// random numbers to add
let randomNrArray = [];
let totalRandoms = 5;

for (let i = 0; i < totalRandoms ; i++) {
    randomNrArray.push(Math.floor(Math.random() * 10));
}
// "random" time intervals
timeIntervals = [ 750, 520, 800, 1200,1500, 2000, 3000,4200, 5000, 5500];

function customerCounter() {
    ticketsSold += randomNrArray[Math.floor(Math.random() *randomNrArray.length)];
    ticketTarget.innerText = ticketsSold;
}
function visitCounter() {
    pageVisits += randomNrArray[Math.floor(Math.random() *randomNrArray.length)];
    visitTarget.innerText = pageVisits;
}

(function loopTickets() {
    let rand =timeIntervals[Math.floor(Math.random() * randomNrArray.length)];
    let max = parseInt(ticketTarget.dataset.max);
    if (ticketsSold > max)
    {
        document.querySelector('#sold_out').innerText = "Sold out! Try again next year!";
        return null
    } else
    {
        setTimeout(function() {
            customerCounter();
            loopTickets();
        }, rand);
    }

}());
(function loopVisits() {
    let rand =timeIntervals[Math.floor(Math.random() * randomNrArray.length)];
    setTimeout(function() {
        visitCounter();
        loopVisits();
    }, rand);
}());



//setInterval(customerCounter, timeIntervals[Math.floor(Math.random() * 6)]);
// setInterval(visitCounter, timeIntervals[Math.floor(Math.random() * 6)]);
