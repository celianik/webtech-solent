let yesBtn = document.getElementById("yes");
let noBtn = document.getElementById("no");
let popUp = document.getElementById("popUp");

noBtn.addEventListener("click", () => {
   popUp.style.display = "none";
});

yesBtn.addEventListener("click", () => {
    document.getElementById("popHeader").innerHTML = "First Lesson - Don't admit that";
    document.getElementById("popPar").innerHTML = "But you did! So as a reward, your third year will now feature 30% extra dementor";
    yesBtn.style.display = "none";
    noBtn.innerHTML = "Yay!"
});

