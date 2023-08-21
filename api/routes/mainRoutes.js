import express from "express";

import productsRoute from "../products/productsRoute.js";
import usersRoute from "../users/usersRoute.js"
import authenticateRoute from "../authenticate/authenticateRoute.js"

const route = express.Router();

route.get("/", (req, res) => {
  console.log("WELCOME TO YSW SECOND PROJECT!");
  res.send("WELCOME TO YSW SECOND PROJECT!");
});
route.use("/products", productsRoute);
route.use("/users", usersRoute);
route.use("/auth", authenticateRoute)

export default route;
