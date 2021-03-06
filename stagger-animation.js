document.querySelector(".logo").style.opacity = 0;
document.querySelector("h2").style.opacity = 0;
document.querySelector("h2 span").style.opacity = 0;
document.querySelector("p").style.opacity = 0;
document.querySelector(".illustration").style.opacity = 0;
document.querySelector("input").style.opacity = 0;
document.querySelector("button").style.opacity = 0;
document
  .querySelectorAll(".social div")
  .forEach((div) => (div.style.opacity = 0));

setTimeout(() => {
  document.querySelector(".logo").style.opacity = 1;
}, 100);

setTimeout(() => {
  document.querySelector("h2").style.opacity = 1;
  document.querySelector("h2 span").style.opacity = 1;
}, 500);

setTimeout(() => {
  document.querySelector("input").style.opacity = 1;
  document.querySelector("p").style.opacity = 1;
}, 600);

setTimeout(() => {
  document.querySelector("button").style.opacity = 1;

  document.querySelector(".illustration").style.opacity = 1;
}, 1200);

setTimeout(() => {
  document.querySelectorAll(".social div").forEach((div, i) => {
    div.style.animation = `slide-in-bottom 0.5s ease-in ${(i + 1) * 100}ms`;
  });
}, 1400);

setTimeout(() => {
  document.querySelectorAll(".social div").forEach((div, i) => {
    div.style.opacity = 1;
  });
}, 1600);
