function calc() {
  const length = parseFloat(document.getElementById('length').value) || 0;
  const corners = parseInt(document.getElementById('corners').value) || 0;
  const pricePerM = 30;
  const cornerExtra = 5;
  const result = length * pricePerM + corners * cornerExtra;
  document.getElementById('result').innerText = 'Итого: ' + result + ' BYN';
}