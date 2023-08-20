import express from "express";

import productController from "../controllers/productController.js";

const route = express.Router();

route.get('/', productController.getAllProducts)
route.get("/:id", productController.getProduct)
route.delete("/:id", productController.deleteProduct)
route.put("/:id", productController.updateProduct)
route.post("/", productController.createProduct)

export default route;