export const calculateQuantity = (state) => {
  const totalQuantity = state
    .map((product) => product.quantity)
    .reduce((a, b) => a + b, 0);
  return totalQuantity;
};
