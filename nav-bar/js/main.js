window.onscroll = function() { scroll() };

function scroll() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "0px 30px";
        // document.getElementById("nav-links").style.fontSize = "17px";
    } else {
        document.getElementById("navbar").style.padding = "20px 30px";
        // document.getElementById("nav-links").style.fontSize = "17.5px";
    }
}

function fun(y) {
    y.classList.toggle("change");
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}