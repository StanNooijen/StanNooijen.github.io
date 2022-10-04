let panels = document.querySelectorAll(".panel");
let sections = document.querySelectorAll("section");
let slides = document.querySelectorAll(".slide");

function scrollDown() {
  window.scrollTo(0, 1200);
  document.getElementById("top1").style.marginBottom = "10rem";
  document.getElementById("top2").style.marginBottom = "10rem";
  document.getElementById("top3").style.marginBottom = "10rem";
  document.getElementById("top4").style.marginBottom = "10rem";
  document.getElementById("top5").style.marginBottom = "10rem";
  document.getElementById("top6").style.marginBottom = "10rem";
  document.getElementById("bottom1").style.marginTop = "10rem";
  document.getElementById("bottom2").style.marginTop = "10rem";
  document.getElementById("bottom3").style.marginTop = "10rem";
  document.getElementById("bottom4").style.marginTop = "10rem";
  document.getElementById("bottom5").style.marginTop = "10rem";
  document.getElementById("bottom6").style.marginTop = "10rem";
}
function scrollDown1() {
  window.scrollTo(0, 3600);
  document.getElementById("top1").style.marginBottom = "0rem";
  document.getElementById("top1").style.transition = "5s";
  document.getElementById("top2").style.marginBottom = "0rem";
  document.getElementById("top2").style.transition = "5s";
  document.getElementById("top3").style.marginBottom = "0rem";
  document.getElementById("top3").style.transition = "5s";
  document.getElementById("top4").style.marginBottom = "0rem";
  document.getElementById("top4").style.transition = "5s";
  document.getElementById("top5").style.marginBottom = "0rem";
  document.getElementById("top5").style.transition = "5s";
  document.getElementById("top6").style.marginBottom = "0rem";
  document.getElementById("top6").style.transition = "5s";
  document.getElementById("bottom1").style.marginTop = "0rem";
  document.getElementById("bottom1").style.transition = "5s";
  document.getElementById("bottom2").style.marginTop = "0rem";
  document.getElementById("bottom2").style.transition = "5s";
  document.getElementById("bottom3").style.marginTop = "0rem";
  document.getElementById("bottom3").style.transition = "5s";
  document.getElementById("bottom4").style.marginTop = "0rem";
  document.getElementById("bottom4").style.transition = "5s";
  document.getElementById("bottom5").style.marginTop = "0rem";
  document.getElementById("bottom5").style.transition = "5s";
  document.getElementById("bottom6").style.marginTop = "0rem";
  document.getElementById("bottom6").style.transition = "5s";
}
function scrollUp() {
  window.scrollTo(0, 0);
  document.getElementById("top1").style.marginBottom = "10rem";
  document.getElementById("top1").style.transition = "5s";
  document.getElementById("top2").style.marginBottom = "10rem";
  document.getElementById("top2").style.transition = "5s";
  document.getElementById("top3").style.marginBottom = "10rem";
  document.getElementById("top3").style.transition = "5s";
  document.getElementById("top4").style.marginBottom = "10rem";
  document.getElementById("top4").style.transition = "5s";
  document.getElementById("top5").style.marginBottom = "10rem";
  document.getElementById("top5").style.transition = "5s";
  document.getElementById("top6").style.marginBottom = "10rem";
  document.getElementById("top6").style.transition = "5s";
  document.getElementById("bottom1").style.marginTop = "10rem";
  document.getElementById("bottom1").style.transition = "5s";
  document.getElementById("bottom2").style.marginTop = "10rem";
  document.getElementById("bottom2").style.transition = "5s";
  document.getElementById("bottom3").style.marginTop = "10rem";
  document.getElementById("bottom3").style.transition = "5s";
  document.getElementById("bottom4").style.marginTop = "10rem";
  document.getElementById("bottom4").style.transition = "5s";
  document.getElementById("bottom5").style.marginTop = "10rem";
  document.getElementById("bottom5").style.transition = "5s";
  document.getElementById("bottom6").style.marginTop = "10rem";
  document.getElementById("bottom6").style.transition = "5s";
}


function loaded() {
  document.getElementById("top1").style.marginBottom = "0rem";
  document.getElementById("top2").style.marginBottom = "0rem";
  document.getElementById("top3").style.marginBottom = "0rem";
  document.getElementById("top4").style.marginBottom = "0rem";
  document.getElementById("top5").style.marginBottom = "0rem";
  document.getElementById("top6").style.marginBottom = "0rem";
  document.getElementById("bottom1").style.marginTop = "0rem";
  document.getElementById("bottom2").style.marginTop = "0rem";
  document.getElementById("bottom3").style.marginTop = "0rem";
  document.getElementById("bottom4").style.marginTop = "0rem";
  document.getElementById("bottom5").style.marginTop = "0rem";
  document.getElementById("bottom6").style.marginTop = "0rem";
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
