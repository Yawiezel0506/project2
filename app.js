import express from "express";
import morgan from "morgan";

import initialData from "./initial.js";

const app = express();

app.use(express.json());
app.use(
  morgan(
    ":date[iso] :remote-addr :method :url :status :response-time ms - :res[content-length]"
  )
);

initialData();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
