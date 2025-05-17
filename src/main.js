import './style.css'

/** 
    Converter Currency Kurs 
  
    1 USD -> 16,488 IDR
    1 EUR -> 18,432 IDR
*/

const fromCurrency = document.querySelector('#from-currency');
const toCurrency = document.querySelector('#to-currency');
const convertButton = document.querySelector('#convert-btn');
const amountInput = document.querySelector('#amount');
const resultField = document.querySelector('#result');
const fromCurrencyFlag = document.querySelector('#from-currency-flag');
const toCurrencyFlag = document.querySelector('#to-currency-flag');

function convertCurrency() {
  let toResult = 0;
  
  alertFunction()

  if (fromCurrency.value === 'USD' && toCurrency.value === 'IDR') {
    console.log('INSIDE')
    toResult = amountInput.value * 16488;
  } else if (fromCurrency.value === 'EUR' && toCurrency.value === 'IDR'){
    toResult = amountInput.value * 18432;
  } else if (fromCurrency.value === 'IDR' && toCurrency.value === 'USD') {
    toResult = amountInput.value / 16488;
  } else if (fromCurrency.value === 'IDR' && toCurrency.value === 'EUR') {
    toResult = amountInput.value / 18432;
  } else if (fromCurrency.value === 'USD' && toCurrency.value === 'EUR') {
    toResult = amountInput.value * 0.9;
  } else if (fromCurrency.value === 'EUR' && toCurrency.value === 'USD') {
    toResult = amountInput.value / 0.9;
  }

  resultField.innerHTML = toResult.toFixed(5);

  if (resultField.innerHTML !== '-') {
    fromCurrencyFlag.classList.remove('invisible');
    fromCurrencyFlag.classList.add('visible');
    toCurrencyFlag.classList.remove('invisible');
    toCurrencyFlag.classList.add('visible');

    fromCurrencyFlag.innerHTML = fromCurrency.value;
    toCurrencyFlag.innerHTML = toCurrency.value;
  }
}

function alertFunction() {
  if (amountInput.value === '0') {
    alert('Must Put Numbers');
  }
}
convertButton.addEventListener('click', () => {
  convertCurrency()
});