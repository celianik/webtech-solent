let frmExample = document.getElementById("frmExample");

frmExample.addEventListener("submit", function(e) {
    let age = document.forms["frmExample"]["txtAge"].value;
    console.log(age);

    if (age>1 && age<117) {
        alert("The form is submitted!");
    }
    else {
        document.forms["frmExample"]["txtAge"].style.backgroundColor = "red";
        alert("Please enter a valid age");
        e.preventDefault();
    }
})
// Same event listener but using an arrow function as argument
/*
frmExample.addEventListener("submit", (e) => {
    alert("The form is submitted!");
})
*/


