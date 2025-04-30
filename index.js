function sin() {
    const formel = "Gegenkathete/Hypotenose";
    document.getElementById('formel').innerHTML = formel;
    document.getElementById('x').placeholder = "Gegenkathete";
    document.getElementById('y').placeholder = "Hypotenuse";
}

function cos() {
    const formel = "Ankathete/Hypotenuse";
    document.getElementById('formel').innerHTML = formel;
    document.getElementById('x').placeholder = "Ankathete";
    document.getElementById('y').placeholder = "Hypotenuse";
}

function tans() {
    const formel = "Gegenkathete/Ankathete";
    document.getElementById('formel').innerHTML = formel;
    document.getElementById('x').placeholder = "Gegenkathete";
    document.getElementById('y').placeholder = "Ankathete";
}

function berechnen() {
    let x = parseFloat(document.querySelector("#x").value);
    let y = parseFloat(document.querySelector("#y").value);
    if (!isNaN(x) && !isNaN(y)){
    document.getElementById('Ergebnis').innerHTML = x/y;
  }
    else {
    alert("Bitte geben sie gültige Werte ein")}
     }
   
debugger