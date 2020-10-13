import express from "express";
import routes from "../routes";
import { home, debuggingg, dataType } from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.debuggingg, debuggingg);
globalRouter.get(routes.dataType, dataType);

export default globalRouter;
