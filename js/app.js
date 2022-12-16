const navLinks = document.querySelectorAll(".nav-links a");
const navLink = document.querySelector(".nav-links");
const toggle = document.querySelector(".hamburger");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((link) => {
      link.classList.remove("nav-active");
    });
    link.classList.add("nav-active");
    toggle.classList.toggle("nav-toggle");
    navLink.classList.toggle("nav-toggle");
  });
});
toggle.addEventListener("click", function () {
  toggle.classList.toggle("nav-toggle");
  navLink.classList.toggle("nav-toggle");
});
// preloader
$(window).on("load", function () {
  $(".preloader-dots").delay(2600).fadeOut();
  $(".preloader").delay(2800).fadeOut();
});
//
/*==============*/
/*TYPED JS CODE*/
/*============*/
let typed = new Typed(".hero-typed", {
  strings: ["", "Business", "Brand"],
  backSpeed: "9",
  typeSpeed: "9",
  loop: true,
});
//
// drop link mouse over toggle
const dropLink = document.querySelector(".drop-links");
const navDrop = document.querySelector(".nav-drop");
navDrop.addEventListener("mouseover", function () {
  dropLink.classList.add("drop-toggle");
});
dropLink.addEventListener("mouseover", function () {
  dropLink.classList.add("drop-toggle");
});
navDrop.addEventListener("mouseleave", function () {
  dropLink.classList.remove("drop-toggle");
});
dropLink.addEventListener("mouseleave", function () {
  dropLink.classList.remove("drop-toggle");
});
