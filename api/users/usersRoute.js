import express from "express";

import users from "./usersController.js";
import checkPermissions from "./middlewares/permissions.js";

const route = express.Router();

route.get("/", checkPermissions, users.getAllUsers);
route.get("/:id", checkPermissions, users.getUser);
route.put("/:id", checkPermissions, users.updateUser);
route.delete("/:id", checkPermissions, users.deleteUser);

export default route;
