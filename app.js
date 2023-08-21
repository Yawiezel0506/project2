import express from "express";
import morgan from "morgan";

import initialData from "./initial.js";
import mainRoute from "./api/routes/mainRoutes.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use("/api", mainRoute);

initialData();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
