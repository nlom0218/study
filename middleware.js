import routes from "./routes";

// localsMiddleware를 생성하여 사용함으로써 pug에서도 사용가능하다
// 다만 app.js에서 생성한 localsMiddleware를 선언하도록 하자
export const localsMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  next();
};
