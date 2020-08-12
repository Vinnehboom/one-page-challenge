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
for (let i = 0; i < 5 ; i++) {
    randomNrArray.push(Math.floor(Math.random() * 10));
}
// "random" time intervals
timeIntervals = [50, 200, 400, 750, 520, 800];

function customerCounter() {
    ticketsSold += randomNrArray[Math.floor(Math.random() *5)];
    ticketTarget.innerText = ticketsSold;
}
function visitCounter() {
    pageVisits += randomNrArray[Math.floor(Math.random() *5)];
    visitTarget.innerText = pageVisits;
}



setInterval(customerCounter, timeIntervals[Math.floor(Math.random() * 6)]);
setInterval(visitCounter, timeIntervals[Math.floor(Math.random() * 6)]);
