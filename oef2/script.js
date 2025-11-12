const form = document.getElementById('bmiForm');
const res = document.getElementById('res');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const weight = Number(document.getElementById('w').value);
  const height = Number(document.getElementById('h').value);
  const validWeight = Number.isFinite(weight) && weight > 0;
  const validHeight = Number.isFinite(height) && height > 0;
  if (!validWeight || !validHeight) {
    res.textContent = 'Vul een geldige massa (kg) en lengte (m) in.';
    return;
  }
  const bmi = weight / (height * height);
  let category;
  let colorClass;
  if (bmi < 18.5) {
    category = 'Ondergewicht';
    colorClass = 'onder';
  } else if (bmi < 25) {
    category = 'Normaal';
        colorClass = 'normaal';
  } else if (bmi < 30) {
    category = 'Overgewicht';
        colorClass = 'over';
  } else {
    category = 'Obesitas';
        colorClass = 'obesitas';
  }
  res.textContent = 'BMI: ' + bmi.toFixed(1) + ' — ' + category;
    // eerst alle kleurklassen verwijderen:
    res.classList.remove('onder', 'normaal', 'over', 'obesitas');

    // daarna de juiste toevoegen:
    res.classList.add('result', colorClass);
});
