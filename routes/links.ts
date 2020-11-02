import { Request, Response, Router, NextFunction } from "express";
import { Link, validateLink } from "../model/Link";

class LinkRoutes {
  public static routes(): Router {
    return Router();
  }
}
