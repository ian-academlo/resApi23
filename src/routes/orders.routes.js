const { Router } = require("express");
const {
  createOrder,
  addProducsToOrder,
} = require("../controllers/orders.controllers");

const router = Router();

router.post("/orders", createOrder);
router.post("/orders/:id/products", addProducsToOrder);

module.exports = router;
