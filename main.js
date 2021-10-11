// chiedere all'utente il numero di chilometri che vuole percorrere
const kilometres = parseInt(prompt("Quanti chilometri vorresti percorrere?"));

// chiedere l'eta del passeggero
const userAge = parseInt(prompt("Quanti anni ha il passegero?"));

//calcolare prezzo del viaggio (0.21 € al km)
const grossPrice = kilometres * 0.21
document.getElementById("initialprice").innerHTML = grossPrice

//applicare lo sconto in base all 'eta (20% minorenni, 40% over 65)

// mostrare il prezzo finale