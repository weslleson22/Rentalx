import  express  from "express";
import { router } from "./routes";
import { categoriesRoutes } from "./routes/categories.routes";
import { specificationRoutes } from "./routes/specifications.routes";

const app = express();
app.use(express.json());


app.use(router)

app.listen(3333, ()=>console.log("Server is running!!"));