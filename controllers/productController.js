import productsService from "../services/productsService.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await productsService.getAllProducts();
    res.json(products);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

export default {
    getAllProducts,
}
