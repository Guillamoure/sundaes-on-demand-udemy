export function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimnumFractionDigits: 2
  }).format(amount);
}
