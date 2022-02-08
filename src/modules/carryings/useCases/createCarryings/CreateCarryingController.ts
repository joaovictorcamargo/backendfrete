import { Request, Response } from "express";
import { CreateCarryingUseCase } from "./CreateCarryingUseCase";

export class CreateCarryingController {
  async handle(req: Request, res: Response) {
    const {
      typeOfPerson,
      cnpj,
      stateRegistration,
      socialReason,
      fantasyName,
      cep,
      street,
      number,
      neighborhood,
      city,
      state,
      email,
      phone,
      Observation,
    } = req.body;

    const createCarryingUseCase = new CreateCarryingUseCase();

    const result = await createCarryingUseCase.execute({
      typeOfPerson,
      cnpj,
      stateRegistration,
      socialReason,
      fantasyName,
      cep,
      street,
      number,
      neighborhood,
      city,
      state,
      email,
      phone,
      Observation,
    });

    return res.status(201).json(result);
  }
}
