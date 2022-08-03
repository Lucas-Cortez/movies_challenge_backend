import { Movie, PrismaClient } from "@prisma/client";
import { IGetMoviesDTO } from "../../useCases/movie/getMovies/IGetMoviesDTO";
import { IMovieRepository } from "../IMovieRepository";

export class PrismaMovieRepository implements IMovieRepository {
  constructor(private prismaClient: PrismaClient) {}

  public async findAll(): Promise<Movie[]> {
    return await this.prismaClient.movie.findMany();
  }

  public async findPaginated(pagination: IGetMoviesDTO): Promise<Movie[]> {
    const { offset, limit } = pagination;

    return await this.prismaClient.movie.findMany({ skip: offset, take: limit });
  }
}
