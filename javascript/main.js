document.documentElement.scrollTop = 0;
document.body.scrollTop = 0;
const leftCards = document.getElementById("leftCards");
const rightCards = document.getElementById("rightCards");
let panels = document.querySelectorAll(".panel");
let sections = document.querySelectorAll("section");
let slides = document.querySelectorAll(".slide");

function scrollDown() {
  window.scrollTo(0, 800);
}
function scrollDown1() {
  window.scrollTo(0, 1700);
  leftCards.style.transform = "translateX(0rem)";
  leftCards.style.opacity = "1";
  leftCards.style.transition = "3s";
  rightCards.style.transform = "translateX(0rem)";
  rightCards.style.opacity = "1";
  rightCards.style.transition = "3s";

}
function scrollUp() {
  window.scrollTo(0, 0);
  leftCards.style.transform = "translateX(-30rem)";
  leftCards.style.opacity = "0";
  rightCards.style.transform = "translateX(-30rem)";
  rightCards.style.opacity = "0";
}


function loaded() {
  leftCards.style.transform = "translateX(-30rem)";
  leftCards.style.opacity = "0";
  rightCards.style.transform = "translateX(-30rem)";
  rightCards.style.opacity = "0";
}

panels.forEach((panel) => {
  addEventListener("click", expand);
});

slides.forEach((slide) => {
  addEventListener("click", expand);
})

function expand(e) {
  removeClasses();
  e.target.classList.add("hover");
}

function removeClasses() {
  sections.forEach((section) => section.classList.remove("hover"));
}
