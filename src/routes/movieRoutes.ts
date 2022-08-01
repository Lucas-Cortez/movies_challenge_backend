import { Router } from "express";
import { getMoviesController } from "../useCases/movie/getMovies";

const movieRoutes = Router();

movieRoutes.get("/", (req, res) => getMoviesController.handle(req, res));

export { movieRoutes };
