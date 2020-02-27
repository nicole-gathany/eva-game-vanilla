// const balls = document.querySelector(".top-balls");
// //i don't think this is working. i may need to read some documentation.
// TweenMax.to(balls, 2, { x: 100 });

console.log("javascript index works");

function myPlay() {
  console.log(" clicking random ball works");
  let elem = document.getElementById("random-ball");
  let colorNum = Math.round(Math.random() * 10);
  console.log(colorNum);

  elem.style.fill = "blue";
}
