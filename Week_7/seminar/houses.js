let q1 = document.getElementById("q1");
let q1LeftBtn = document.getElementById("q1-leftBtn");
let q1RightBtn = document.getElementById("q1-rightBtn");
let q2 = document.getElementById("q2");
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
