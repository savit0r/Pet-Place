const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.classList = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("ckick", (e) =>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const ScrollRevealOption ={
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__content h4", {
    ...ScrollRevealOption,
});

ScrollReveal().reveal(".header__content h1", {
    ...ScrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header__content h2", {
    ...ScrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header__content p", {
    ...ScrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".header__btn", {
    ...ScrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".intro__card", {
    ...ScrollRevealOption,
    interval: 500,
});


ScrollReveal().reveal(".about__row:nth-child(3) .about__image img", {
    ...ScrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".about__row:nth-child(4) .about__image img", {
    ...ScrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".about__row:nth-child(5) .about__image img", {
    ...ScrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".about__content span", {
    ...ScrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".about__content h4", {
    ...ScrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".about__content p", {
    ...ScrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".product__card", {
    ...ScrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".service__card", {
    duration: 1000,
    interval: 500,
});

