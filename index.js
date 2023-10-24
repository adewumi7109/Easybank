var burger = document.getElementById("hamburger")
var navlinks = document.querySelector('.m-links');

burger.addEventListener('click', ()=>{
    navlinks.classList.toggle('active')
});