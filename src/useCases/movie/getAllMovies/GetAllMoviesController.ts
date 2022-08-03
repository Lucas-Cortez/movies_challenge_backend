import { Request, Response } from "express";
import { GetAllMoviesUseCase } from "./GetAllMoviesUseCase";

export class GetAllMoviesController {
  constructor(private getAllMoviesUseCase: GetAllMoviesUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const data = await this.getAllMoviesUseCase.execute();
    return response.status(200).json(data);
  }
}
