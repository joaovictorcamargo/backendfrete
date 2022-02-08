import { Router } from "express";
import { carryingRoutes } from "./Carrying.routes";

const routes = Router();

routes.use("/carryings", carryingRoutes);

export { routes };
