//Zet variabelen klaar (declareren en initialiseren)
const knownColors = ['red', 'green', 'blue', 'tomato', 'gold', 'purple', 'orange'];
const colorInput = document.getElementById('colorInput');
const applyButton = document.getElementById('applyButton');
const message = document.getElementById('message');
const preview = document.getElementById('preview');
//schrijf functie om bij het klikken een kleur te checken en weer te geven of foutmelding te geven indien kleur niet voorhanden
applyButton.addEventListener('click', function () {
  const value = colorInput.value.trim();
  const isKnown = knownColors.includes(value.toLowerCase());
  //test of hexadecimale waarde correct is > "^ ... $" om string af te bakenen, '#' aan start, check 3 of 6 hexwaarden, en "/i" voor case insensitive ; test de ingegeven waarde hiermee...
  const isHex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(value);
  if (isKnown) {
    preview.style.backgroundColor = value.toLowerCase();
    message.textContent = '';
  } else if (isHex) {
    preview.style.backgroundColor = value;
    message.textContent = '';
  } else {
    preview.style.backgroundColor = 'white';
    message.textContent = 'Onbekende kleur. Probeer bv. "red" of "#ff9900".';
  }
});
