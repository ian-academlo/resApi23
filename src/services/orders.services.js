const {
  createOrder,
  updateTotal,
} = require("../repositories/order.repository");
const {
  getOneProduct,
  addProduct,
  updateQuantity,
} = require("../repositories/orderDetails.repository");

class OrderServices {
  static async createNewOrder(data) {
    try {
      return await createOrder(data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async addNewProduct(data) {
    try {
      // ? Existe el producto para esta orden
      const product = await getOneProduct(data.product_id);

      await updateTotal(data.price, data.order_id);

      if (!product) {
        return await addProduct(data);
      }

      return await updateQuantity(data.product_id);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = OrderServices;
