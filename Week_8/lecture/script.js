let exampleBtn = document.getElementById("exampleBtn");
let getModules = document.getElementById("getModules");
let result = document.getElementById("result");

exampleBtn.addEventListener("click", (e) => {
    const xhttp = new XMLHttpRequest();
    
    console.log("Button clicked!");

    xhttp.open("GET","content.html");
    xhttp.send();
    xhttp.responseType = 'text';

    xhttp.onload = function(e) {
        console.log(e.target.responseText);
        result.innerHTML = e.target.responseText;
    }
    /*
    xhttp.addEventListener("load", (e) => {
        document.getElementById("result").innerHTML = e.target.responseText;
    })
    */
});

getModules.addEventListener("click", (e) => {
    const xhttp2 = new XMLHttpRequest();

    xhttp2.open("GET","modules.json");
    xhttp2.send();

    xhttp2.onload = function(e) {
        const modules = JSON.parse(e.target.responseText);

        let output = "";
        modules.forEach( (module) => {
            output += "<p>Name: " + module.name + ", Leader: " + module.leader + "</p>";
        });

        result.innerHTML = output;
    }
});