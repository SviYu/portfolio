/* Scrolling animation */
window.onscroll = function() { myFunction() };

function myFunction() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById('myBar').style.width = scrolled + '%'
}

/* Modal CV */
let modal = document.getElementById('myModal');
let imgView = document.querySelector('.view');
let modalImg = document.getElementById('img01');

imgView.onclick = function () {
    modal.style.display = 'block';
}
let close = document.getElementsByClassName('close')[0];
close.onclick = function () {
    modal.style.display = 'none';
}

/* Burger menu animation */
const burgerMenu = document.getElementById('burgerMenu');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
})

/* Burger menu */
let mobileMenu = document.querySelector(".burger-menu-mobile");

function toggleMenu() {
  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "block";
    };
}

/* Menu closes automatically after clicking links */
let menuLinks = document.querySelectorAll('.mobile-list-item');
menuLinks.forEach(el => el.addEventListener('click', function (e) {
    mobileMenu.style.display = 'none';
}));

/* Preloader */
let loader = document.getElementById('preloader');
window.addEventListener('load', () => {
    loader.style.display = 'none'
})


