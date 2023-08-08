export const calculateCost = (state) => {
  const totalCost = state
    .map((product) => Number(product.quantity * product.price.toFixed(1)))
    .reduce((a, b) => a + b, 0);
  return totalCost;
};
