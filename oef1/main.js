// haal de HTML elementen op: knop en output
const calcButton = document.getElementById("calc");
const output = document.getElementById("out");
// voeg de functie toe aan de knop bij het klikken
calcButton.addEventListener('click', function() {
    //maak de prompt en zet om in cijfer
    const input = prompt('Wat is je leeftijd?');
    const age = Number(input);
    //bouw logica: foute input / leeftijd => prijs
    if (!Number.isFinite(age) || age < 0) {
        // geef output bij fout
        output.textContent = "Geen geldige leeftijd";
        return;
    } else {
        let price;
        if (age < 6) {
            price = 0;
        } else if (age < 65) {
            price = 12;
        } else {
            price = 8;
        }
        // geef output bij leeftijd
        output.textContent = `Prijs van je ticket: ${price}`
        console.log(`${price}`)
    };
});