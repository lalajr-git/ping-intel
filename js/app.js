const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.navlist');
const links = document.querySelectorAll('.navlist li');

hamburger.addEventListener("click", ()=>{
    navList.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("fade");
    });
});