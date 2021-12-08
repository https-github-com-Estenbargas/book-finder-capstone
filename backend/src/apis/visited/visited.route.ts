import {Router} from "express";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {
    postVisitedController,
    getVisitedByUserIdController,
    getVisitedByVisitedIdController,
    getVisitedByBookId
} from "./visited.controller";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check} from "express-validator";

export const VisitedRoute = Router ();

VisitedRoute.route("/")
    .post(isLoggedIn, asyncValidatorController([check("visitedBookId", "Please provide a valid UUID for BookId.").isUUID()]), postVisitedController)
    .get(isLoggedIn, getVisitedByUserIdController);

VisitedRoute.route("/:visitedId")
    .get(isLoggedIn,asyncValidatorController([check("visitedId", "Please provide a valid UUID for VisitedId.").isUUID()]), getVisitedByVisitedIdController)

VisitedRoute.route("/book/:bookId")
    .get(isLoggedIn, asyncValidatorController([check("bookId", "Please Provide A Valid UUID For BookId ").isUUID()]), getVisitedByBookId)