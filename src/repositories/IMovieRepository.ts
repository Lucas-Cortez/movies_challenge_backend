import { Movie } from "@prisma/client";
import { IGetMoviesDTO } from "../useCases/movie/getMovies/IGetMoviesDTO";

export interface IMovieRepository {
  findAll(): Promise<Movie[]>;
  findPaginated(pagination: IGetMoviesDTO): Promise<Movie[]>;
}
