import countryList from "./data.js";

const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const form = document.getElementById("form");
const amountInput = document.getElementById("amount");
const msg = document.getElementById("msg");

// Populate dropdowns
Object.keys(countryList).forEach((currency) => {
  let option1 = document.createElement("option");
  option1.value = currency;
  option1.innerText = currency;
  fromCurrency.append(option1);

  let option2 = document.createElement("option");
  option2.value = currency;
  option2.innerText = currency;
  toCurrency.append(option2);
});

// Default values
fromCurrency.value = "USD";
toCurrency.value = "INR";

// Fetch Exchange Rate
async function getExchangeRate() {
  let amount = amountInput.value || 1;

  const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency.value}`;
  const response = await fetch(url);
  const data = await response.json();

  const rate = data.rates[toCurrency.value];
  const finalAmount = (amount * rate).toFixed(2);

  msg.innerText = `${amount} ${fromCurrency.value} = ${finalAmount} ${toCurrency.value}`;
}

// Button click
form.addEventListener("submit", (e) => {
  e.preventDefault();
  getExchangeRate();
});

// Initial load
getExchangeRate();
