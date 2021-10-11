// chiedere all'utente il numero di chilometri che vuole percorrere
const kilometres = parseInt(prompt("Quanti chilometri vorresti percorrere?"));

// chiedere l'eta del passeggero
const userAge = parseInt(prompt("Quanti anni ha il passegero?"));

//calcolare prezzo del viaggio (0.21 € al km)
const grossPrice = kilometres * 0.21
document.getElementById("initialprice").innerHTML = "\u20AC" + grossPrice

//applicare lo sconto in base all 'eta (20% minorenni, 40% over 65)
if (userAge < 18) {
    const minorDiscount = ((grossPrice * 20) / 100).toFixed(2);
    document.getElementById("discount").innerHTML = "- \u20AC" + minorDiscount;
    document.getElementById("total_price").innerHTML = "\u20AC" + (grossPrice - minorDiscount).toFixed(2)

} else if (userAge > 65) {
    const overDiscount = ((grossPrice * 40) / 100).toFixed(2);
    document.getElementById("discount").innerHTML = "- \u20AC" + overDiscount
    document.getElementById("total_price").innerHTML = "\u20AC" + (grossPrice - overDiscount).toFixed(2)

} else {
    const noDiscount = 0
    document.getElementById("discount").innerHTML = "- \u20AC" + noDiscount;
    document.getElementById("total_price").innerHTML = "\u20AC" + grossPrice
}
