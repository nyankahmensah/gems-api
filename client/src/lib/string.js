Number.prototype.round = function(precision) {
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(this.valueOf() * multiplier) / multiplier;
};

export function formatCurrency({ amount, currency = 'GHS', showCurrency = false }) {
  const amountNumber = Number(amount);

  if (isNaN(amountNumber)) {
    return `${amount}`;
  }

  const decimal = amountNumber.round(2);
  const parsedCurrency = decimal.toLocaleString();

  return `${showCurrency ? currency : ''} ${parsedCurrency}`;
}
