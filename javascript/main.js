let popUp = document.getElementById("cookiePopup");

document.getElementById("acceptCookie").addEventListener("click", () => {

  let d = new Date();


  d.setMinutes(2 + d.getMinutes());

  document.cookie = "myCookieName=thisIsMyCookie; expires = " + d + ";";

  popUp.classList.add("hide");
  popUp.classList.remove("show");
});

const checkCookie = () => {
  let input = document.cookie.split("=");

  if(input[0] == "myCookieName") {
    popUp.classList.add("hide");
    popUp.classList.remove("show");
  } else {
    popUp.classList.add("show");
    popUp.classList.remove("hide");
  }
};

window.onload = () =>{
  setTimeout(() => {
    checkCookie();
  }, 2000);
}





// document.documentElement.scrollTop = 0;
// document.body.scrollTop = 0;
// const secAdd = 2;
// const allIds = ['leftCards', 'rightCards', 'leftCardsTwo', 'rightImage', 'leftImage', 'rightImageTwo', 'arrowThree'];
// const leftIds = ['leftCards', 'leftCardsTwo', 'leftImage'];
// const rightIds = ['rightCards', 'rightImage', 'rightImageTwo'];
// const arrows = ['arrowOne', 'arrowTwo', 'arrowThree'];
// let panels = document.querySelectorAll(".panel");
// let sections = document.querySelectorAll("section");
// let slides = document.querySelectorAll(".slide");

// function scrollDown() {
//   window.scrollTo(0, 800);

// }
// function scrollDown1() {
//   window.scrollTo(0, 1700);
//   for (var i = 0; i < allIds.length; i++) {
//     document.getElementById(allIds[i]).style.opacity = "1";
//     document.getElementById(allIds[i]).style.transform = "translateX(0%)";
//   }
//   document.getElementById("leftCards").style.transition = "2s";
//   document.getElementById('rightImage').style.transition = "2s";
//   document.getElementById("leftImage").style.transition = "4s";
//   document.getElementById("rightCards").style.transition = "4s";
//   document.getElementById("leftCardsTwo").style.transition = "6s";
//   document.getElementById("rightImageTwo").style.transition = "6s";
//   document.getElementById("arrowThree").style.transition = "4s";
// }
// function scrollUp() {
//   window.scrollTo(0, 0);
//   document.getElementById("arrowThree").style.opacity = "0";
//   document.getElementById("arrowThree").style.transform = "translateX(-300%)";
//   for (var i = 0; i < leftIds.length; i++) {
//     document.getElementById(leftIds[i]).style.opacity = "0";
//     document.getElementById(leftIds[i]).style.transform = "translateX(-100%)";
//   }
//   for (var i = 0; i < rightIds.length; i++) {
//     document.getElementById(rightIds[i]).style.opacity = "0";
//     document.getElementById(rightIds[i]).style.transform = "translateX(100%)";
//   }
// }
// function loaded() {
//   document.getElementById("arrowThree").style.opacity = "0";
//   document.getElementById("arrowThree").style.transform = "translateX(-300%)";
//   for (var i = 0; i < leftIds.length; i++) {
//     document.getElementById(leftIds[i]).style.opacity = "0";
//     document.getElementById(leftIds[i]).style.transform = "translateX(-100%)";
//   }
//   for (var i = 0; i < rightIds.length; i++) {
//     document.getElementById(rightIds[i]).style.opacity = "0";
//     document.getElementById(rightIds[i]).style.transform = "translateX(100%)";
//   }
// }

// panels.forEach((panel) => {
//   addEventListener("click", expand);
// });

// slides.forEach((slide) => {
//   addEventListener("click", expand);
// })

// function expand(e) {
//   removeClasses();
//   e.target.classList.add("hover");
// }

// function removeClasses() {
//   sections.forEach((section) => section.classList.remove("hover"));
// }