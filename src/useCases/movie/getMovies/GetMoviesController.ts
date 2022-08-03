import { Request, Response } from "express";
import { GetMoviesUseCase } from "./GetMoviesUseCase";

export class GetMoviesController {
  constructor(private getMoviesUseCase: GetMoviesUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const { offset, limit } = request.query;

    const offsetAux = typeof offset === "string" ? parseInt(offset) : 0;
    const limitAux = typeof limit === "string" ? parseInt(limit) : 10;

    const data = await this.getMoviesUseCase.execute({ offset: offsetAux, limit: limitAux });
    return response.status(200).json(data);
  }
}
