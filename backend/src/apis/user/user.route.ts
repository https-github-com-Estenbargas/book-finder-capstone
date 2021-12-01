import {Router} from "express";
import {check, checkSchema} from "express-validator";
import {userVaildator} from "./user.vaildator";
import {asyncValidatorController} from "../../utils/controllers/asyncVaildator.controller"
import {getUserByUserId, getPartialUserByUserId, putUserController} from "./user.controller";

export const UserRoute: Router = Router()
UserRoute.route("/")
    .post
