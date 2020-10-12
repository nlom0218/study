// npm
import "core-js";
import express from "express";

// 필수 middleware
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

//
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import { localsMiddleware } from "./middleware";

const app = express();

app.set("view engine", "pug");

// 필수 middleware 설정
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet({ contentSecurityPolicy: false }));
app.use(morgan("dev"));

// 전역 미들웨어
app.use(localsMiddleware);

app.use(routes.home, globalRouter);

//////////////////////////////////////////////////////////
app.listen("3000", () => {
  console.log(`✅ Listening on: http://localhost:3000`);
});
