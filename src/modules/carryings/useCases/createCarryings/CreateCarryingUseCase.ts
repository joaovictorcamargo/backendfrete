import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateCarryingsDTO } from "../../dtos/CreateCarryingsDTO";

export class CreateCarryingUseCase {
  async execute({
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
  }: CreateCarryingsDTO) {
    //Verificar se a transprtadora já existe
    const carryingAlreadyExists =
      await prisma.$queryRaw`SELECT * FROM carryings where phone = ${phone} OR cnpj = ${cnpj} OR email = ${email};`;
    console.log(carryingAlreadyExists);

    if (carryingAlreadyExists.length > 0) {
      throw new AppError("Carrying already exists!");
    }

    //Criar transportadora
    const carrying = await prisma.carrying.create({
      data: {
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
      },
    });

    return carrying;
  }
}
