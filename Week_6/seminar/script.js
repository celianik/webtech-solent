const { randomInt } = require("crypto");

let btn = document.getElementById("btnExample");

btn.style.width = "500px";
btn.style.height = "500px";
btn.style.background = "green";
btn.textContent = "Click me!";
btn.style.fontSize = "32px";
btn.style.borderRadius = "50%";

btn.addEventListener("click", function () {
  let clickRGB = randomRGB();
  btn.style.background =
    "rgb(" + clickRGB[0] + "," + clickRGB[1] + "," + clickRGB[2] + ")";

  if (btn.style.background === "black") {
    btn.style.color = "white";
  }
  //alert("This button was clicked!");
});

function randomRGB() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  let rgb = [r, g, b];
  return rgb;
}
