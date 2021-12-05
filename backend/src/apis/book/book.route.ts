import {getBookByBookId, getAllBooks, getRandomBooks} from "./book.controller";
import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";

export const BookRoute: Router = Router();

BookRoute.route("/")
    .get(getAllBooks)

BookRoute.route("/book/:bookId")
    .get(
        asyncValidatorController([check("bookId", "Please Provide A Valid bookId").isUUID()])
        , getBookByBookId
    )

BookRoute.route("/book-detail/:bookId")
    .get(
        asyncValidatorController([check("bookId", "Please Provide A Valid bookId").isUUID()])
        , getBookByBookId
    )

BookRoute.route("/books")
    .get(getRandomBooks)