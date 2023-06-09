const { order_details } = require("../models");

const getOneProduct = (product_id) => {
  const product = order_details.findOne({
    where: { product_id },
  });
  return product;
  // si no existe --> null
  // si existe objeto
};

const addProduct = (product) => {
  const element = order_details.create(product);
  return element;
};

const updateQuantity = (product_id) => {
  const item = order_details.increment(
    {
      quantity: 1,
    },
    { where: { product_id } }
  );
  return item;
};

module.exports = { getOneProduct, addProduct, updateQuantity };
