// const balls = document.querySelector(".top-balls");
// //i don't think this is working. i may need to read some documentation.
// TweenMax.to(balls, 2, { x: 100 });

console.log("javascript index works");

function myColor() {
  console.log(" clicking random ball works");
  let elem = document.getElementById("this-ball");
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

  elem.style.cx = 1300;
  elem.style.cy = 550;
}

function myPlay() {
  console.log("fire button works");
  let element = document.getElementById("this-ball");
  let relativePosX = 0;
  let relativePosY = 0;
  let elementYellow1 = document.getElementById("yellow-ball-1");
  //not sure about setInterval, may need to look that up
  //what is the handler??
  //didn't realize that the second part of setInterval was in ms. that explains a lot
  //i want to know if this is too fast
  let id = setInterval(frame, 250);
  function frame() {
    if (
      //maybe this will be for the yellow balls
      element.style.cx < 0 ||
      element.style.cy < 0
    ) {
      clearInterval(id);
    } else {
      relativePosX -= 40;
      relativePosY -= 10;
      element.style.cx = 1300 + relativePosX;
      element.style.cy = 550 + relativePosY;
      //writing to see if it's possible to make something happen when the ball is in a certain place other than clear interval
      if (element.style.cx < 300 && element.style.fill === "yellow") {
        elementYellow1.style.fill = "white";
      }
    }
  }
}

//I tried this by putting the element into the balls, but it wouldn't work i think that might be because the computer cannot read id's within the g tags, i'm not sure
//this didn't technically work but it kind of worked because the documentation fill said it changed to green

function changeYellow() {
  // let elementRandom = document.getElementById("this-ball");
  //getElementsById() is not a function
  let elementYellow1 = document.getElementById("yellow-ball-1");
  //I want to know if you can have more than one element in a function
  //it turns out you can
  let elementYellow2 = document.getElementById("yellow-ball-2");
  let elementYellow3 = document.getElementById("yellow-ball-3");
  let elementYellow4 = document.getElementById("yellow-ball-4");
  let elementYellow5 = document.getElementById("yellow-ball-5");
  let elementYellow6 = document.getElementById("yellow-ball-6");
  let elementYellow7 = document.getElementById("yellow-ball-7");
  let elementYellow8 = document.getElementById("yellow-ball-8");
  let elementYellow9 = document.getElementById("yellow-ball-9");
  let id = setInterval(frame2, 250);
  //does notwork and it's saying it cannot find style of null
  function frame2() {
    if (
      elementYellow1.style.fill === "white" &&
      elementYellow2.style.fill === "white" &&
      elementYellow3.style.fill === "white" &&
      elementYellow4.style.fill === "white" &&
      elementYellow5.style.fill === "white" &&
      elementYellow6.style.fill === "white" &&
      elementYellow7.style.fill === "white" &&
      elementYellow8.style.fill === "white" &&
      elementYellow9.style.fill === "white"
    ) {
      clearInterval(id);
    } else {
      elementYellow1.style.fill = "white";
      elementYellow2.style.fill = "white";
      elementYellow3.style.fill = "white";
      elementYellow4.style.fill = "white";
      elementYellow5.style.fill = "white";
      elementYellow6.style.fill = "white";
      elementYellow7.style.fill = "white";
      elementYellow8.style.fill = "white";
      elementYellow9.style.fill = "white";
    }
  }
  console.log(elementYellow1);
  console.log(elementYellow2);
  console.log(elementYellow3);
  console.log(elementYellow4);
}
