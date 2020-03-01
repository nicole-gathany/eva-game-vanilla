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
  console.log(elem.style.fill);
}

function myPlay() {
  console.log("fire button works");
  let element = document.getElementById("this-ball");
  let relativePosX = 0;
  let relativePosY = 0;
  let elementYellow1 = document.getElementById("yellow-ball-1");
  let elementYellow2 = document.getElementById("yellow-ball-2");
  let elementYellow3 = document.getElementById("yellow-ball-3");
  let elementYellow4 = document.getElementById("yellow-ball-4");
  let elementYellow5 = document.getElementById("yellow-ball-5");
  let elementYellow6 = document.getElementById("yellow-ball-6");
  let elementYellow7 = document.getElementById("yellow-ball-7");
  let elementYellow8 = document.getElementById("yellow-ball-8");
  let elementYellow9 = document.getElementById("yellow-ball-9");

  let green1 = document.getElementById("green-ball-1");
  let green2 = document.getElementById("green-ball-2");
  let green3 = document.getElementById("green-ball-3");
  let green4 = document.getElementById("green-ball-4");
  let green5 = document.getElementById("green-ball-5");
  let green6 = document.getElementById("green-ball-6");
  let green7 = document.getElementById("green-ball-7");
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
      if (element.style.fill === "yellow") {
        //it works now for some reason
        //balls near cx===300 are 9, 7,
        //balls near cx===250 are 6, 4, 3
        //balls near cx===200 are 2
        //cx===150 are 1, 5 and 8
        //this only worked for 9 and 7 for some reason
        if (element.style.cx < 300) {
          elementYellow9.style.fill = "white";
          elementYellow7.style.fill = "white";
        }
        if (element.style.cx < 250) {
          elementYellow6.style.fill = "white";
          elementYellow4.style.fill = "white";
          elementYellow3.style.fill = "white";
        }
        if (element.style.cx < 200) {
          elementYellow2.style.fill = "white";
        }
        if (element.style.cx < 150) {
          elementYellow1.style.fill = "white";

          elementYellow5.style.fill = "white";

          elementYellow8.style.fill = "white";
        }
      } else if (element.style.cx < 120 && element.style.fill === "green") {
        green1.style.fill = "white";
        green2.style.fill = "white";
        green3.style.fill = "white";
        green4.style.fill = "white";
        green5.style.fill = "white";
        green6.style.fill = "white";
        green7.style.fill = "white";
      }
    }
  }
}
