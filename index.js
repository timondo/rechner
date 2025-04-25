// sin Rechner
function berechnenSin() {
    let singegenkathete = parseFloat(document.querySelector("#sinGegenkathete").value);
    let sinhypotenuse = parseFloat(document.querySelector("#sinHypotenuse").value);

    if (!isNaN(singegenkathete) && !isNaN(sinhypotenuse)) {
        document.getElementById("sinoutput").innerHTML = (singegenkathete / sinhypotenuse).toFixed(2);
    } else {
        alert("Bitte geben Sie korrekte Werte ein");
    }
}

// cos Rechner
function berechnenCos() {
    let cosankathete = parseFloat(document.querySelector("#Ankathete").value);
    let coshypotenuse = parseFloat(document.querySelector("#Hypothenuse2").value);

    if (!isNaN(cosankathete<coshypotenuse) && !isNaN(coshypotenuse)) {
        document.getElementById("cosoutput").innerHTML = (cosankathete / coshypotenuse).toFixed(2);
    } else {
        alert("Bitte geben Sie korrekte Werte ein");
    }
}

// tan Rechner
function berechnenTan() {
    let tangegenkathete = parseFloat(document.querySelector("#Gegenkathete2").value);
    let tanankathete = parseFloat(document.querySelector("#Ankathete2").value);

    if (!isNaN(tangegenkathete) && !isNaN(tanankathete)) {
        document.getElementById("tanoutput").innerHTML = (tangegenkathete / tananakathete).toFixed(2);
    } else {
        alert("Bitte geben Sie korrekte Werte ein");
    }
}