// Make pointer events:none on the iframe to pass mouse events, but turn it on when the mouse clicks
// This is to prevent the iframe from stealing focus when the mouse is over it
console.log("cursor.js loaded");
const links = document.querySelectorAll("a");

var mouseY = 0;
const cursor = document.querySelector(".circle, .btn");
const delay = 250;

function throttle(callback, limit) {
    let wait = false;
    return function () {
        if (!wait) {
            callback.apply(null, arguments);
            wait = true;
            setTimeout(function () {
                wait = false;
            }, limit);
        }
    };
}
/*
const myIframe = document.getElementById("video");

myIframe.addEventListener("mouseover", function() {
    cursor.classList.add("hidden");
  })
myIframe.addEventListener("mouseout", function() {
    cursor.classList.remove("hidden");
    })
*/

links.forEach(link => {
    link.addEventListener("mouseover", function(e) {
        cursor.classList.add("circle-expanded");
    })
    link.addEventListener("mouseout", function(e) {
        cursor.classList.remove("circle-expanded");
    })
})
            
    
// window.resize callback function
function mouseGetDimensions(e) {
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    mouseY = e.clientY;
    cursor.style.top = `${e.clientY + scrollTop}px`;
    cursor.style.left = `${e.clientX}px`;
    console.log("mousex "+ e.clientX + "mousey " + e.clientY);
}
function scrollGetDimensions(e) {
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    cursor.style.top = `${mouseY + scrollTop}px`;
}
// window.resize event listener
window.addEventListener("mousemove", (e) => {
    throttle(mouseGetDimensions(e), delay);
});
window.addEventListener("scroll", (e) => {
    throttle(scrollGetDimensions(e), delay);
});