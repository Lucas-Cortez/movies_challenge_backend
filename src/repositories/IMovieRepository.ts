import { Movie } from "@prisma/client";

export interface IMovieRepository {
  findAll(): Promise<Movie[]>;
}
