import express from "express";
import morgan from "morgan";

import initialData from "./initial.js";
import mainRoute from './routes/mainRoutes.js'

const app = express();

app.use(express.json());
app.use(
  morgan(
    ":date[iso] :remote-addr :method :url :status :response-time ms - :res[content-length]"
  )
);
app.use("/ysw_site", mainRoute)

initialData();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
