import { Request, Response } from "express";
import { GetCarryingUseCase } from "./GetCarryingUseCase";

export class GetCarryingController {
  async handle(req: Request, res: Response) {
    const getCarryingUseCase = new GetCarryingUseCase();

    const result = await getCarryingUseCase.execute();

    return res.status(201).json(result);
  }
}
