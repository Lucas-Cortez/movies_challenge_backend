import { prisma } from "../../../infra/database";
import { PrismaMovieRepository } from "../../../repositories/implementations/PrismaMovieRepository";
import { GetMoviesController } from "./GetMoviesController";
import { GetMoviesUseCase } from "./GetMoviesUseCase";

const prismaMovieRepository = new PrismaMovieRepository(prisma);
const getMoviesUseCase = new GetMoviesUseCase(prismaMovieRepository);
const getMoviesController = new GetMoviesController(getMoviesUseCase);

export { getMoviesController, getMoviesUseCase };
