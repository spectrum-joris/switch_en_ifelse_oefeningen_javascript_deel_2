// --- STAP 1: Zoek alle HTML-elementen op die we nodig hebben ---
const emojiSelect = document.getElementById('emoji');  // dropdown met emoji’s
const bgSelect = document.getElementById('bg');        // dropdown met achtergrondkleuren
const sizeSelect = document.getElementById('size');    // dropdown met tekstgroottes
const resetButton = document.getElementById('reset');  // reset-knop
const card = document.getElementById('card');          // het vak waarin de emoji staat
const sym = document.getElementById('sym');            // het <span> element dat de emoji toont


// --- STAP 2: Schrijf één functie die alle visuele instellingen toepast ---
function apply() {
  // Lees de huidige keuzes uit
  const selectedEmoji = emojiSelect.value;
  const selectedColor = bgSelect.value;
  const selectedSize = sizeSelect.value;

  // Zet de emoji
  sym.textContent = selectedEmoji;

  // Zet de achtergrondkleur van het kaartje
  card.style.backgroundColor = selectedColor;

  // --- hier gebruiken we switch in plaats van if/else ---
  // We bepalen de tekstkleur op basis van de gekozen achtergrondkleur
  switch (selectedColor) {
    case 'black':
      // witte tekst als achtergrond zwart is
      subtext.style.color = 'white';
      break;

    case 'pink':
      // paarse tekst op roze achtergrond
      subtext.style.color = 'purple';
      break;

    case 'lightblue':
      // donkerblauwe tekst voor contrast
      subtext.style.color = 'darkblue';
      break;

    case 'lightgreen':
      // donkergroene tekst
      subtext.style.color = 'darkgreen';
      break;

    default:
      // standaard: zwarte tekst
      subtext.style.color = 'black';
  }

  // Zet de formaat van de emoji (in pixels)
  sym.style.fontSize = selectedSize + 'px';
}


// --- STAP 3: Koppel eventlisteners aan elk form-element ---
emojiSelect.addEventListener('change', function () {
  apply(); // voer de wijzigingen meteen door
});

bgSelect.addEventListener('change', function () {
  apply();
});

sizeSelect.addEventListener('change', function () {
  apply();
});


// --- STAP 4: Resetknop om alles terug te zetten naar de beginwaarden ---
resetButton.addEventListener('click', function () {
  emojiSelect.selectedIndex = 0;
  bgSelect.value = 'white';
  sizeSelect.value = '48';
  apply(); // herteken de kaart
});


// --- STAP 5: Voer apply() één keer uit bij het openen ---
apply();
