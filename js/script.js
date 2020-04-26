const localColor = localStorage.color;

function onload() { 
    if(localStorage.color === "#ffff") {
        document.body.style.backgroundColor = localColor;
        document.getElementById("moon").style.display = "block";
        document.getElementById("sun").style.display = "none";
    }
    else if(localStorage.color === "#292C35"){
        document.body.style.backgroundColor = localColor;
        document.getElementById("sun").style.display = "block";
        document.getElementById("moon").style.display = "none";
    }
    else {
        localStorage.setItem("color","#ffff")
        document.getElementById("sun").style.display = "none";
        document.getElementById("moon").style.display = "block";
    }
}
function change() {
    if(localStorage.color === "#ffff") {
        document.body.style.backgroundColor = "#292C35";
        localStorage.color = "#292C35"
        document.getElementById("moon").style.display = "none";
        document.getElementById("sun").style.display = "block";
    }
    else if(localStorage.color === "#292C35"){
        document.body.style.backgroundColor = "#ffff";
        localStorage.color = "#ffff"
        document.getElementById("sun").style.display = "none";
        document.getElementById("moon").style.display = "block";
    }
    else {
        console.log("Error")
    }
}