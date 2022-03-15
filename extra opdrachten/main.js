var hammernum = 7;
var hammervalue = 6;
var hammerbought = 0;
var hammertotal = 0;

var zaagnum = 8;
var zaagvalue = 8;
var zaagbought = 0;
var zaagtotal = 0;

var spijkernum = 9999;
var spijkervalue = 0.5;
var spijkerbought = 0;
var spijkertotal = 0;

var total = 0;
var VAT = 0;
var VATtotal = 0;



function hammer() {
    hammernum--;
    document.getElementById("valueHammer").innerText = hammervalue;
    document.getElementById("aantalHammers").innerText = hammernum;
    hammerbought++;
    if (hammernum < 0) {
        document.getElementById("aantalHammers").innerText = "out of stock";
        document.getElementById("hammer").remove();
    }
}

function zaag() {
    zaagnum--;
    document.getElementById("valuezaag").innerText = zaagvalue;
    document.getElementById("aantalZaagen").innerText = zaagnum;
    zaagbought++;

    if (zaagnum < 0) {
        document.getElementById("aantalZaagen").innerText = "out of stock";
        document.getElementById("zaag").remove();
    }
}

function spijker() {
    spijkernum--;
    document.getElementById("valueSpijker").innerText = spijkervalue;
    document.getElementById("aantalSpijkers").innerText = spijkernum;
    spijkerbought++;
    if (spijkernum < 0) {
        document.getElementById("aantalSpijkers").innerText = "out of stock";
        document.getElementById("spijker").remove();
    }
}

function checkout() {
    hammertotal = hammervalue * hammerbought;
    zaagtotal = zaagvalue * zaagbought;
    spijkertotal = spijkervalue * spijkerbought;
    total = spijkertotal + zaagtotal + hammertotal;
    VAT = total / 100 * 21;
    VATtotal = total + VAT;

    document.getElementById("hammerbought").innerText = "you have bought " + hammerbought + " hammers for a total of " + hammertotal;
    document.getElementById("zaagbought").innerText = "you have bought " + zaagbought + " zagen for a total of " + zaagtotal;
    document.getElementById("spijkerbought").innerText = "you have bought " + spijkerbought + " spijkers for a total of " + spijkertotal;

    document.getElementById("total").innerText = "your total without VAT added is " + total;
    document.getElementById("VAT").innerText = "the VAT price of your total is" + VAT;
    document.getElementById("VATtotal").innerText = "your total with VAT added is " + VATtotal;
}

function loaded() {
    document.getElementById("aantalHammers").innerText = hammernum;
    document.getElementById("valueHammer").innerText = hammervalue;

    document.getElementById("aantalZaagen").innerText = zaagnum;
    document.getElementById("valuezaag").innerText = zaagvalue;

    document.getElementById("aantalSpijkers").innerText = spijkernum;
    document.getElementById("valueSpijker").innerText = spijkervalue;
}