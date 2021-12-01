import {Router} from "express";
import {check, checkSchema} from "express-validator";
import {userVaildator} from "./user.vaildator";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {getUserByUserId, getPartialUserByUserId, putUserController, getUserByUserEmail} from "./user.controller";
// @ts-ignore
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";

export const UserRoute: Router = Router()
UserRoute.route("/")
    .post(putUserController);

UserRoute.route("/:userId")
    .get(
        asyncValidatorController([check("userId", "Please Provide A Valid UserId").isUUID()])
        , getUserByUserId
    )
    .put(isLoggedIn, asyncValidatorController(checkSchema(userVaildator)), putUserController)

UserRoute.route("/email/:userEmail")
    .get(
        asyncValidatorController([check("userEmail", "Please Provide A Valid UserId").isUUID()])
        , getUserByUserEmail
    )
    .put(isLoggedIn, asyncValidatorController(checkSchema(userVaildator)), putUserController)
