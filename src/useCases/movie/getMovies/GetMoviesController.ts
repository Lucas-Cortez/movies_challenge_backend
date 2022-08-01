import { Request, Response } from "express";
import { GetMoviesUseCase } from "./GetMoviesUseCase";

export class GetMoviesController {
  constructor(private getMoviesUseCase: GetMoviesUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const data = await this.getMoviesUseCase.execute();
    return response.status(200).json(data);
  }
}
