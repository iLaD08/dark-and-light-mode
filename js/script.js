let theme = "light";
function onload() {
    document.body.style.backgroundColor = sessionStorage.getItem("color");
}
function change() {
    if(theme === "light") {
        document.body.style.backgroundColor = "#292C35";
        sessionStorage.setItem("color","#292C35")
        theme = "dark";
        document.getElementById("moon").style.display = "block";
        document.getElementById("sun").style.display = "none";

    }
    else if(theme === "dark"){
        document.body.style.backgroundColor = "white";
        sessionStorage.setItem("color","white")
        theme = "light";
        document.getElementById("sun").style.display = "block";
        document.getElementById("moon").style.display = "none";
    }
    else {
        console.log("Error")
    }
}