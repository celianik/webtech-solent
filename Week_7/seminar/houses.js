let q1 = document.getElementById("q1");
let q1LeftBtn = document.getElementById("q1-leftBtn");
let q1RightBtn = document.getElementById("q1-rightBtn");
let q2 = document.getElementById("q2");
let q2LeftBtn = document.getElementById("q2-leftBtn");
let q2RightBtn = document.getElementById("q2-rightBtn");
let q3 = document.getElementById("q3");
let q3LeftBtn = document.getElementById("q3-leftBtn");
let q3RightBtn = document.getElementById("q3-rightBtn");

let result = document.getElementById("result");

q1LeftBtn.addEventListener("click", () => {
    result.innerHTML = "Congratulation, you're a Gryffindor!";
    result.style.display = "block";
    q1.style.display = "none";
});

q1RightBtn.addEventListener("click", () => {
    q1.style.display = "none";
    q2.style.display = "block";
});

q2LeftBtn.addEventListener("click", () => {
    result.innerHTML = "Congratulation, you're a Slytherin!";
    result.style.display = "block";
    q2.style.display = "none";
});

q2RightBtn.addEventListener("click", () => {
    q2.style.display = "none";
    q3.style.display = "block";
});

q3LeftBtn.addEventListener("click", () => {
    result.innerHTML = "Congratulation, you're a Ravenclaw!";
    result.style.display = "block";
    q3.style.display = "none";
});

q3RightBtn.addEventListener("click", () => {
    result.innerHTML = "Congratulation, you're a Hufflepuff!";
    result.style.display = "block";
    q3.style.display = "block";
});
