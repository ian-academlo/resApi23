const OrderServices = require("../services/orders.services");

const createOrder = async (req, res) => {
  try {
    const data = req.body;
    const order = await OrderServices.createNewOrder(data);
    res.status(201).json(order);
  } catch (error) {
    // next(error)
    res.status(400).json(error);
  }
};

const addProducsToOrder = async (req, res) => {
  // atiende la petición
  try {
    const { product_id, price, quantity } = req.body;
    const { id: order_id } = req.params;
    await OrderServices.addNewProduct({
      order_id,
      product_id,
      price,
      quantity,
    });
    res.status(201).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  createOrder,
  addProducsToOrder,
};
