//declareer en initialiseer de benodigde variabelen
const askButton = document.getElementById('ask');
const out = document.getElementById('out');
//maak de functie aan die input checkt, en vergelijkt met cases om bepaalde output weer te geven ; maak ook een standaard optie aan
askButton.addEventListener('click', function () {
  const raw = prompt('Dag van de week? (bv. maandag)') || '';
  const input = raw.trim().toLowerCase();
  let message;
  switch (input) {
    case 'maandag':
    case 'dinsdag':
    case 'woensdag':
    case 'donderdag':
    case 'vrijdag':
      message = 'Werkdag';
      break;
    case 'zaterdag':
    case 'zondag':
      message = 'Weekend';
      break;
    default:
      message = 'Onbekende dag';
  }
  out.textContent = message;
});
