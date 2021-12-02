import {Router} from "express";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {visited, getVisited} from "./visited.controller";

export const VisitedRoute = Router ();

VisitedRoute.route("/")
    .post(isLoggedIn, visited);

VisitedRoute.route("/:userId")
    .get(isLoggedIn, getVisited);