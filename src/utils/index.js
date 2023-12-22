//para sumar los precios globales
/**
 * this function calculate the total price of the order
 * @param {Array} products cartProducts array of objects
 * @returns {numer}total price
 */
export const totalPrice = (products) => {
  let sum = 0;
  products.forEach((product) => (sum += product.price));
  return sum;
};
