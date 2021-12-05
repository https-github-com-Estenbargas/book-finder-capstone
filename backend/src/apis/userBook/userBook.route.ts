import {Router} from "express";
import {
    getAllUserBookByUserId,
    getBooksByUserId,
    getUserBookByUserBookBookId, getUserBookByUserBookUserId,
    toggleUserBookController
} from "./user-book.controller";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check, checkSchema} from "express-validator";
import {UserBookValidator} from "./userBook.validator";

const userBookRoute = Router();

userBookRoute.route("/")
    .post(isLoggedIn, toggleUserBookController)

userBookRoute.route("/:userBookUserId/:userBookBookId")
    .get(isLoggedIn,asyncValidatorController(checkSchema(UserBookValidator)), getBooksByUserId)

userBookRoute.route("/books/:userId")
    .get(isLoggedIn,asyncValidatorController([check("userId", "Please provide a valid userId").isUUID()]), getAllUserBookByUserId)

userBookRoute.route("/userBook/:userId")
    .get(isLoggedIn,asyncValidatorController([check("userId", "Please provide a valid userId").isUUID()]), getBooksByUserId)

userBookRoute.route("/book/:userBookBookId")
    .get(isLoggedIn,asyncValidatorController([check("userBookBookId", "please provide a valid userBookBookId").isUUID()]), getUserBookByUserBookBookId)

userBookRoute.route("/book/user/:userBookUserId")
    .get(isLoggedIn,asyncValidatorController([check("userBookUserId", "please provide a valid userBookUserId").isUUID()]), getUserBookByUserBookUserId)




