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
  array,
  number,
  math,
  date,
  regExp,
  string,
  newsymbol,
  iterable,
  spread,
  destructuring,
  setMap,
  dom,
  dom2,
  dom3,
  dom4,
  event1,
  event2,
  timer,
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
globalRouter.get(routes.array, array);
globalRouter.get(routes.number, number);
globalRouter.get(routes.math, math);
globalRouter.get(routes.date, date);
globalRouter.get(routes.regExp, regExp);
globalRouter.get(routes.string, string);
globalRouter.get(routes.newsymbol, newsymbol);
globalRouter.get(routes.iterable, iterable);
globalRouter.get(routes.spread, spread);
globalRouter.get(routes.destructuring, destructuring);
globalRouter.get(routes.setMap, setMap);
globalRouter.get(routes.dom, dom);
globalRouter.get(routes.dom2, dom2);
globalRouter.get(routes.dom3, dom3);
globalRouter.get(routes.dom4, dom4);
globalRouter.get(routes.event1, event1);
globalRouter.get(routes.event2, event2);
globalRouter.get(routes.timer, timer);

export default globalRouter;
