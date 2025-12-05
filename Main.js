let length = 3;
function left() {
    for(let i = 0; i < length; i++) {
        if(document.getElementById("Gecko").src.endsWith(i + ".jpg")) {
            document.getElementById("Gecko").src = ((i - 1 + length) % length)+ ".jpg";
            break;
        }
    }
}
function right() {
    for(let i = 0; i < length; i++) {
        if(document.getElementById("Gecko").src.endsWith(i + ".jpg")) {
            document.getElementById("Gecko").src = ((i + 1 + length) % length)+ ".jpg";
            break;
        }
    }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const nav = document.querySelector(".nav-container");
    const buttons = document.querySelectorAll(".nav-button, .sign-in");
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        nav.style.padding = "20px 20px 20px 25px";
        buttons.forEach(btn => btn.classList.add("hide"));
        nav.classList.add("scrolled");
    } else {
        document.getElementById("nav-container").style.padding = "40px 20px 50px 25px";
        buttons.forEach(btn => btn.classList.remove("hide"));
        nav.classList.remove("scrolled");
    }
}