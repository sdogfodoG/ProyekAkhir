let length = 3;
let length2 = 2;
function left() {
    for(let i = 0; i < length; i++) {
        if(document.getElementById("Animal1").src.endsWith("1-" + i + ".jpg")) {
            document.getElementById("Animal1").src = "1-" + ((i - 1 + length) % length)+ ".jpg";
            break;
        }
    }
}
function right() {
    for(let i = 0; i < length; i++) {
        if(document.getElementById("Animal1").src.endsWith("1-" + i + ".jpg")) {
            document.getElementById("Animal1").src = "1-" + ((i + 1 + length) % length)+ ".jpg";
            break;
        }
    }
}

function left2() {
    for(let i = 0; i < length2; i++) {
        if(document.getElementById("Animal2").src.endsWith("2-" + i + ".jpg")) {
            document.getElementById("Animal2").src = "2-" + ((i - 1 + length2) % length2)+ ".jpg";
            break;
        }
    }
}
function right2() {
    for(let i = 0; i < length2; i++) {
        if(document.getElementById("Animal2").src.endsWith("2-" + i + ".jpg")) {
            document.getElementById("Animal2").src = "2-" + ((i + 1 + length2) % length2)+ ".jpg";
            break;
        }
    }
}

function left3() {
    for(let i = 0; i < length; i++) {
        if(document.getElementById("Animal3").src.endsWith("3-" + i + ".jpg")) {
            document.getElementById("Animal3").src = "3-" + ((i - 1 + length) % length)+ ".jpg";
            break;
        }
    }
}
function right3() {
    for(let i = 0; i < length; i++) {
        if(document.getElementById("Animal3").src.endsWith("3-" + i + ".jpg")) {
            document.getElementById("Animal3").src = "3-" + ((i + 1 + length) % length)+ ".jpg";
            break;
        }
    }
}

function left4() {
    for(let i = 0; i < length2; i++) {
        if(document.getElementById("Animal4").src.endsWith("4-" + i + ".jpg")) {
            document.getElementById("Animal4").src = "4-" + ((i - 1 + length2) % length2)+ ".jpg";
            break;
        }
    }
}
function right4() {
    for(let i = 0; i < length2; i++) {
        if(document.getElementById("Animal4").src.endsWith("4-" + i + ".jpg")) {
            document.getElementById("Animal4").src = "4-" + ((i + 1 + length2) % length2)+ ".jpg";
            break;
        }
    }
}

function left6() {
    for(let i = 0; i < length; i++) {
        if(document.getElementById("Animal6").src.endsWith("6-" + i + ".jpg")) {
            document.getElementById("Animal6").src = "6-" + ((i - 1 + length) % length)+ ".jpg";
            break;
        }
    }
}
function right6() {
    for(let i = 0; i < length; i++) {
        if(document.getElementById("Animal6").src.endsWith("6-" + i + ".jpg")) {
            document.getElementById("Animal6").src = "6-" + ((i + 1 + length) % length)+ ".jpg";
            break;
        }
    }
}

function left8() {
    for(let i = 0; i < length2; i++) {
        if(document.getElementById("Animal8").src.endsWith("8-" + i + ".jpg")) {
            document.getElementById("Animal8").src = "8-" + ((i - 1 + length2) % length2)+ ".jpg";
            break;
        }
    }
}
function right8() {
    for(let i = 0; i < length2; i++) {
        if(document.getElementById("Animal8").src.endsWith("8-" + i + ".jpg")) {
            document.getElementById("Animal8").src = "8-" + ((i + 1 + length2) % length2)+ ".jpg";
            break;
        }
    }
}

function left9() {
    for(let i = 0; i < length2; i++) {
        if(document.getElementById("Animal9").src.endsWith("9-" + i + ".jpg")) {
            document.getElementById("Animal9").src = "9-" + ((i - 1 + length2) % length2)+ ".jpg";
            break;
        }
    }
}
function right9() {
    for(let i = 0; i < length2; i++) {
        if(document.getElementById("Animal9").src.endsWith("9-" + i + ".jpg")) {
            document.getElementById("Animal9").src = "9-" + ((i + 1 + length2) % length2)+ ".jpg";
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