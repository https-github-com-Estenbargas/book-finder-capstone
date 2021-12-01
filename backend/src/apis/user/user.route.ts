import {Router} from "express";
import {check, checkSchema} from "express-validator";
import {userVaildator} from "./user.vaildator";
import {asyncValidatorController} from "../../utils/controllers/asyncVaildator.controller"
import {getUserByUserId, getPartialUserByUserId, putUserController} from "./user.controller";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller"

export const UserRoute: Router = Router()
UserRoute.route("/")
    .post(putUserController);

UserRoute.route("/:userId")
    .get(
        asyncValidatorController([check("userId", "Please Provide A Valid UserId").isUUID()])
        , getUserByUserId
    )
    .put(isLoggedIn, asyncValidatorController(checkSchema(userVaildator)), putUserController)
