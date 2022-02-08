import { Router } from "express";
import { CreateCarryingController } from "../modules/carryings/useCases/createCarryings/CreateCarryingController";
import { GetCarryingController } from "../modules/carryings/useCases/getCarryings/GetCarryingController";

const createCarryingController = new CreateCarryingController();
const getCarryingController = new GetCarryingController();

const carryingRoutes = Router();

carryingRoutes.post("/", createCarryingController.handle);
carryingRoutes.get("/", getCarryingController.handle);

export { carryingRoutes };
