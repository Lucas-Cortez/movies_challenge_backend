import { Movie, PrismaClient } from "@prisma/client";
import { IMovieRepository } from "../IMovieRepository";

export class PrismaMovieRepository implements IMovieRepository {
  constructor(private prismaClient: PrismaClient) {}

  public async findAll(): Promise<Movie[]> {
    return await this.prismaClient.movie.findMany();
  }
}
