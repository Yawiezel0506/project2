import productsRepo from "../dal/productsRepo.js";

import joi from "joi";

const newProductSchema = joi.object({
  title: joi.string().required(),
  price: joi.number().positive().required(),
  description: joi.string().required(),
  category: joi.string().required(),
  image: joi.string().uri().required(),
  rating: joi
    .object({
      rate: joi.number().positive().max(5).required(),
      count: joi.number().integer().min(0).required(),
    })
    .required(),
  quantity: joi.number().integer().min(0).required(),
});

const createProduct = async (product) => {
  const { error } = newProductSchema.validate(product);
  if (error) {
    throw new Error(`Validation error: ${error.details[0].message}`);
  }

  return productsRepo.createProduct(product);
};

const getAllProducts = async () => {
  return productsRepo.getAllProducts();
};

const getProduct = async (productId) => {
  return productsRepo.getProduct(productId);
};

const deleteProduct = async (productId) => {
  return productsRepo.deleteProduct(productId);
};

const updateProduct = async (productId, newProduct) => {
  return productsRepo.updateProduct(productId, newProduct);
};

export default {
  getAllProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  createProduct,
};
