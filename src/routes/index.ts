import { Router } from "express";
import { movieRoutes } from "./movieRoutes";

const routes = Router();

routes.use("/movie", movieRoutes);

export { routes };
