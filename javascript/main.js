let panels = document.querySelectorAll(".panel");
let sections = document.querySelectorAll("section");
let slides = document.querySelectorAll(".slide");

function scrollDown() {
  window.scrollTo(0, 800);
}
function scrollDown1() {
  window.scrollTo(0, 3600);

}
function scrollUp() {
  window.scrollTo(0, 0);
}


function loaded() {
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
