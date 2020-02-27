// const balls = document.querySelector(".top-balls");
// //i don't think this is working. i may need to read some documentation.
// TweenMax.to(balls, 2, { x: 100 });

console.log("javascript index works");

function myColor() {
  console.log(" clicking random ball works");
  let elem = document.getElementById("random-ball");
  let colorNum = Math.round(Math.random() * 10);
  console.log(colorNum);

  if (colorNum >= 0 && colorNum < 2) {
    elem.style.fill = "blue";
  } else if (colorNum >= 2 && colorNum < 4) {
    elem.style.fill = "purple";
  } else if (colorNum >= 4 && colorNum < 6) {
    elem.style.fill = "red";
  } else if (colorNum >= 6 && colorNum < 8) {
    elem.style.fill = "yellow";
  } else if (colorNum >= 8 && colorNum <= 10) {
    elem.style.fill = "green";
  }
}

function myPlay() {
  console.log("fire button works");
  let element = document.getElementById("this-ball");
  let relativePos = 0;
  //not sure about setInterval, may need to look that up
  //what is the handler??
  let id = setInterval(frame, 10);
  function frame() {
    if (
      (element.style.cx < 0 && element.style.cy < 0) ||
      (element.style.cx > 2000 && element.style.cy > 1000)
    ) {
      clearInterval(id);
    } else {
      //   element.style.cx--;
      //   element.style.cy--;
      console.log("hello");
    }
  }
  console.log(element.style.cx + " is cx");
  console.log(element.style.cy + " is cy");
}
