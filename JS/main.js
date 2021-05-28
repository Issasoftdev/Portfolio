const menuBtn = document.getElementById("menuBtn");
const menuExitBtn = document.getElementById("menuExitBtn");
const portfolioMenu = document.getElementById("portfolioMenu");
const header = document.getElementById("header");

function openMenu() {
    portfolioMenu.style.display = "block";
    menuBtn.style.display = "none";
};

function closeMenu() {
    portfolioMenu.style.display = "none";
    menuBtn.style.display = "block";
};

menuBtn.addEventListener('click', openMenu);
menuExitBtn.addEventListener('click', closeMenu);