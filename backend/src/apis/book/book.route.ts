import {getBookByBookId, getAllBooks, getRandomBooks} from "./book.controller";
import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";

export const BookRoute: Router = Router();

BookRoute.route("/")
    .get(isLoggedIn, getAllBooks)

BookRoute.route("/book/:bookId")
    .get(isLoggedIn,
        asyncValidatorController([check("bookId", "Please Provide A Valid bookId").isUUID()])
        , getBookByBookId
    )

BookRoute.route("/book-detail/:bookId")
    .get(isLoggedIn,
        asyncValidatorController([check("bookId", "Please Provide A Valid bookId").isUUID()])
        , getBookByBookId
    )

BookRoute.route("/random-books")
    .get(isLoggedIn, getRandomBooks)