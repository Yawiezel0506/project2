import express from "express";

import productsRoute from "./productsRoute.js";
import usersRoute from "./usersRoute.js"
import authenticateRoute from "./authenticateRoute.js"

const route = express.Router();

route.get("/", (req, res) => {
  console.log("WELCOME TO YSW SECOND PROJECT!");
  res.send("WELCOME TO YSW SECOND PROJECT!");
});
route.use("/products", productsRoute);
route.use("/:user/users", usersRoute);
route.use("/", authenticateRoute)

export default route;
