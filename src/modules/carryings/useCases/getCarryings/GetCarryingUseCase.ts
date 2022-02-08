import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";

export class GetCarryingUseCase {
  async execute() {
    const carrying = await prisma.carrying.findMany();

    if (!carrying) {
      throw new AppError("Carrying not exists!");
    }

    return carrying;
  }
}
