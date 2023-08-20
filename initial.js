import fs from "fs/promises";
import axios from "axios";

const PRODUCTS_FILE_PATH = "./db/products.json";

const readFromFile = async () => {
  const data = await fs.readFile(PRODUCTS_FILE_PATH, "utf8");
  if (data) {
    return JSON.parse(data);
  }
  return null;
};

const writeToFile = async (products) => {
  const updatedDataJSON = JSON.stringify(products);
  await fs.writeFile(PRODUCTS_FILE_PATH, updatedDataJSON, "utf8");
};

const initialData = async () => {
  const dbData = await readFromFile();
  if (!dbData || !Array.isArray(dbData)) {
    const response = await axios.get("https://fakestoreapi.com/products");
    let data = await response.data;
    data = data.map((product) => {
      return {
        ...product,
        quantity: Math.floor(Math.random() * 150),
      };
    });
    await writeToFile(data);
    console.log("Success!!");
  } else {
    console.log("already field");
  }
};

export default initialData;
