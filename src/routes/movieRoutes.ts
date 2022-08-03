import { Router } from "express";
import { getAllMoviesController } from "../useCases/movie/getAllMovies";
import { getMoviesController } from "../useCases/movie/getMovies";

const movieRoutes = Router();

movieRoutes.get("/all", (req, res) => getAllMoviesController.handle(req, res));
movieRoutes.get("/", (req, res) => getMoviesController.handle(req, res));

export { movieRoutes };
