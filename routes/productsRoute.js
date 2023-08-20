import express from "express";

import productController from "../controllers/productController.js";

const route = express.Router();

route.get('/', productController.getAllProducts)

export default route;