import express from "express";

import productsRoute from "./productsRoute.js";

const route = express.Router();

route.get("/", (req, res) => {
  console.log("WELCOME TO YSW SECOND PROJECT!");
  res.send("WELCOME TO YSW SECOND PROJECT!");
});
route.use("/products", productsRoute);

export default route;
