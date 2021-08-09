// Toggle between adding and removing the responsive class to the topnav when user clicks the hamburger icon
function myResNav() {
    let x = document.getElementById("myTopNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    }
    else {
        x.className = "topnav";
    }
}