import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(morgan("dev"));
    this.app.use(bodyParser.json());
    this.mountRoutes();
  }

  private mountRoutes = () => {
    this.app.use(
      (
        err: Error & { status: number },
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ): void => {
        res.status(err.status || 500);
        res.json({
          error: "Server error",
        });
      }
    );

    this.app.use("/");
  };
}

export default new App().app;
