const fruitInput = document.getElementById('fruit');
const goButton = document.getElementById('go');
const out = document.getElementById('out');

goButton.addEventListener('click', function () {
  const value = (fruitInput.value || '').trim().toLowerCase();
  let priceText;
  switch (value) {
    case 'appels':
    case 'apples':
      priceText = '€0,32 per pond';
      break;
    case 'bananen':
    case 'bananas':
      priceText = '€0,48 per pond';
      break;
    case 'kersen':
    case 'cherries':
      priceText = '€3,00 per pond';
      break;
    case 'mango':
    case 'mangoes':
      priceText = '€0,56 per pond';
      break;
    case 'papaja':
    case 'papayas':
      priceText = '€2,79 per pond';
      break;
    default:
      priceText = null;
  }
  if (priceText) {
    out.textContent = 'Prijs: ' + priceText;
  } else {
    out.textContent = 'Sorry, die hebben we niet.';
  }
});
