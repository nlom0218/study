import express from "express";
import routes from "../routes";
import { home, test } from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.test, test);

export default globalRouter;
