import express from "express";
import routes from "../routes";
import {
  home,
  debuggingg,
  dataType,
  operator,
  control,
  object,
} from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.debuggingg, debuggingg);
globalRouter.get(routes.dataType, dataType);
globalRouter.get(routes.operator, operator);
globalRouter.get(routes.control, control);
globalRouter.get(routes.object, object);

export default globalRouter;
