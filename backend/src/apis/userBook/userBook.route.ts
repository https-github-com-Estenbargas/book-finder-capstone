import {Router} from "express";
import {toggleUserBookController} from "./user-book.controller";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check} from "express-validator";

const userBookRoute = Router();

userBookRoute.route("/")
    .post(isLoggedIn,asyncValidatorController([check("userBookId")]) toggleUserBookController)