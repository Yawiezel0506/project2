import fs from "fs/promises"; // Using promises version of fs

const PRODUCTS_FILE_PATH = "./db/products.json";

const readProductsFromFile = async () => {
  const data = await fs.readFile(PRODUCTS_FILE_PATH, "utf8");
  return JSON.parse(data);
};

const writeProductsToFile = async (products) => {
  const updatedDataJSON = JSON.stringify(products);
  await fs.writeFile(PRODUCTS_FILE_PATH, updatedDataJSON, "utf8");
};

const getAllProducts = async () => {
  const users = await readProductsFromFile();
  return users;
};

export default {
  getAllProducts,
}
