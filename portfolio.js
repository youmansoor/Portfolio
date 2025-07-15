let btn = document.getElementById("btn");
let nav = document.getElementById("nav");

function myfunction() {

    if (nav.style.display === "block") {
        nav.style.display = "none";
        console.log('block');
    }     
    else {   
        nav.style.display = "block";
        console.log('none');
        }
    }
    function Submit(){
        alert("Your Form is Submitted.")
        
    }