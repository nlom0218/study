import express from "express";
import routes from "../routes";
import {
  home,
  debuggingg,
  dataType,
  operator,
  control,
  object,
  basicTerm,
  scope,
  variableKeyword,
  propertyAttribute,
  constructor,
  prototype,
  thisKeyword,
  closure,
} from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.debuggingg, debuggingg);
globalRouter.get(routes.dataType, dataType);
globalRouter.get(routes.operator, operator);
globalRouter.get(routes.control, control);
globalRouter.get(routes.object, object);
globalRouter.get(routes.basicTerm, basicTerm);
globalRouter.get(routes.scope, scope);
globalRouter.get(routes.variableKeyword, variableKeyword);
globalRouter.get(routes.propertyAttribute, propertyAttribute);
globalRouter.get(routes.constructor, constructor);
globalRouter.get(routes.prototype, prototype);
globalRouter.get(routes.thisKeyword, thisKeyword);
globalRouter.get(routes.closure, closure);

export default globalRouter;
