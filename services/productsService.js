import productsRepo from "../dal/productsRepo.js";

const getAllProducts = async () => {
  return productsRepo.getAllProducts();
};

export default {
    getAllProducts,
}
