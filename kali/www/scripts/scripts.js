function whoami() {
    var x = document.querySelector(".resume");
    if (x.hidden == true) {
        x.hidden = false;
    } else {
        x.hidden = true;
    }
}

function contact() {
    var x = document.querySelector(".info_contact");
    if (x.hidden == true) {
        x.hidden = false;
    } else {
        x.hidden = true;
    }
}

function academic() {
    var x = document.querySelector(".info_academic");
    if (x.hidden == true) {
        x.hidden = false;
    } else {
        x.hidden = true;
    }
}

function construction() {
    alert("under construction...");
}

function exit() {
    var x = document.querySelector(".exit");
    window.open("D:\\Documentos\\Code\\Html\\data0008\\kali login\\index.html", "_self");
}

function certs() {
    var x = document.querySelector(".info_cert");
    if (x.hidden == true) {
        x.hidden = false;
    } else {
        x.hidden = true;
    }
}

function cert1() {
    window.open("certificates\\certificate-3.pdf")
}

function cert2() {
    window.open("certificates\\certificate-4.pdf")
}

function cert3() {
    window.open("certificates\\certificate-5.pdf")
}

window.onload = function() {
    var disclaimer = document.getElementsByClassName("disclaimer")[0];
    disclaimer.parentNode.removeChild(disclaimer);
}

window.onload = function() {
    window.scrollTo(0, 0);
}