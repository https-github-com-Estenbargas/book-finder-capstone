import {Router} from "express";
import {signupUserController} from "./sign-up.controller";
import {signupValidator} from "./signup.validator";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {activationController} from "./activation.controller";
import {param} from "express-validator";

const {checkSchema} = require("express-validator")
export const signUpRoute: Router = Router();

signUpRoute.route("/")
    .post(
        asyncValidatorController(checkSchema(signupValidator)),
        signupUserController
    );

signUpRoute.route("/activation/:activation")
    .get(
        asyncValidatorController([param("activation", "Invalid Activation Link").isHexadecimal().notEmpty()]),
        activationController
    )

