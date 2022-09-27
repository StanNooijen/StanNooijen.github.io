class item{
    constructor(v, n, b, t){
        this.value = v;
        this.num = n;
        this.bought = b;
        this.totall = t;
    }
}

var hammer = new item(6, 7, 0, 0);
var zaag = new item(8, 8, 0, 0);
var spijker = new item(0.5, 9999, 0, 0);


var total = 0;
var VAT = 0;
var VATtotal = 0;



function buyhammer() {
    hammer.num--;
    document.getElementById("valueHammer").innerText = "€" + hammer.value;
    document.getElementById("aantalHammers").innerText = hammer.num;
    hammer.bought++;
    if (hammer.num < 1) {
        document.getElementById("aantalHammers").innerText = "out of stock";
        document.getElementById("hammer").remove();
    }
}

function buyzaag() {
    zaag.num--;
    document.getElementById("valuezaag").innerText = "€" + zaag.value;
    document.getElementById("aantalZaagen").innerText = zaag.num;
    zaag.bought++;

    if (zaag.num < 1) {
        document.getElementById("aantalZaagen").innerText = "out of stock";
        document.getElementById("zaag").remove();
    }
}

function buyspijker() {
    spijker.num--;
    document.getElementById("valueSpijker").innerText = "€" + spijker.value;
    document.getElementById("aantalSpijkers").innerText = spijker.num;
    spijker.bought++;
    if (spijker.num < 1) {
        document.getElementById("aantalSpijkers").innerText = "out of stock";
        document.getElementById("spijker").remove();
    }
}

function checkout() {
    hammer.totall = hammer.value * hammer.bought;
    zaag.totall = zaag.value * zaag.bought;
    spijker.totall = spijker.value * spijker.bought;
    total = spijker.totall + zaag.totall + hammer.totall;
    VAT = total / 100 * 21;
    VATtotal = total + VAT;

    document.getElementById("hammerbought").innerText = "you have bought " + hammer.bought + " hammers for a total of €" + hammer.totall;
    document.getElementById("zaagbought").innerText = "you have bought " + zaag.bought + " zagen for a total of €" + zaag.totall;
    document.getElementById("spijkerbought").innerText = "you have bought " + spijker.bought + " spijkers for a total of €" + spijker.totall;

    document.getElementById("total").innerText = "your total without VAT added is €" + total;
    document.getElementById("VAT").innerText = "the VAT price of your total is €" + VAT;
    document.getElementById("VATtotal").innerText = "your total with VAT added is €" + VATtotal;
}

function loaded() {
    document.getElementById("aantalHammers").innerText = hammer.num;
    document.getElementById("valueHammer").innerText = "€" + hammer.value;

    document.getElementById("aantalZaagen").innerText = zaag.num;
    document.getElementById("valuezaag").innerText = "€" + zaag.value;

    document.getElementById("aantalSpijkers").innerText = spijker.num;
    document.getElementById("valueSpijker").innerText = "€" + spijker.value;
}