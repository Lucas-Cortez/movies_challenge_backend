import { Movie } from "@prisma/client";
import { PrismaMovieRepository } from "../../../repositories/implementations/PrismaMovieRepository";
import { IGetMoviesDTO } from "./IGetMoviesDTO";

export class GetMoviesUseCase {
  constructor(private prismaMovieRepository: PrismaMovieRepository) {}

  public async execute(pagination: IGetMoviesDTO): Promise<Movie[]> {
    return await this.prismaMovieRepository.findPaginated(pagination);
  }
}
