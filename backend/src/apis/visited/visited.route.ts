import {Router} from "express";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {postVisitedController, getVisitedByVisitedUserIdController} from "./visited.controller";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check} from "express-validator";

export const VisitedRoute = Router ();

VisitedRoute.route("/")
    .post(isLoggedIn, asyncValidatorController([check("visitedBookId", "Please provide a valid UUID for BookId.").isUUID()]), postVisitedController)
    .get(isLoggedIn, getVisitedByVisitedUserIdController);

VisitedRoute.route("/:visitedId")

