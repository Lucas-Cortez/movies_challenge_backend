import { Movie } from "@prisma/client";
import { PrismaMovieRepository } from "../../../repositories/implementations/PrismaMovieRepository";

export class GetAllMoviesUseCase {
  constructor(private prismaMovieRepository: PrismaMovieRepository) {}

  public async execute(): Promise<Movie[]> {
    return await this.prismaMovieRepository.findAll();
  }
}
