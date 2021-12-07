import {Router} from "express";
import {
    getAllUserBookByUserId,
    getBooksByUserId,
    getUserBookByUserBookBookId, getUserBookByUserBookUserId,
    toggleUserBookController
} from "./userBook.controller";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check, checkSchema} from "express-validator";
import {UserBookValidator} from "./userBook.validator";

export const UserBookRoute = Router();

UserBookRoute.route("/")
    .post(isLoggedIn, toggleUserBookController)

UserBookRoute.route("/:userBookUserId/:userBookBookId")
    .get(isLoggedIn,asyncValidatorController(checkSchema(UserBookValidator)), getBooksByUserId)

UserBookRoute.route("/books/:userId")
    .get(isLoggedIn,asyncValidatorController([check("userId", "Please provide a valid userId").isUUID()]), getAllUserBookByUserId)

UserBookRoute.route("/userBook/:userId")
    .get(isLoggedIn,asyncValidatorController([check("userId", "Please provide a valid userId").isUUID()]), getBooksByUserId)

UserBookRoute.route("/book/:userBookBookId")
    .get(isLoggedIn,asyncValidatorController([check("userBookBookId", "please provide a valid userBookBookId").isUUID()]), getUserBookByUserBookBookId)

UserBookRoute.route("/book/user/:userBookUserId")
    .get(isLoggedIn,asyncValidatorController([check("userBookUserId", "please provide a valid userBookUserId").isUUID()]), getUserBookByUserBookUserId)




