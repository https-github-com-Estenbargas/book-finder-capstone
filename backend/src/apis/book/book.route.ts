import {
    getBookByBookId,
    getAllBooks,
    getRandomBooks,
    getBookByUserBookBookId,
    getAllBooksByGenre
} from "./book.controller";
import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";

export const BookRoute: Router = Router();

BookRoute.route("/")
    .get(getAllBooks)

BookRoute.route("/genre")
    .get(getAllBooksByGenre)

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

BookRoute.route("/random-books")
    .get(getRandomBooks)

BookRoute.route("/user-book/:userBookBookId")
    .get(isLoggedIn, asyncValidatorController([check("userBookBookId", "Please Provide A Valid userBookBookId")]), getBookByUserBookBookId)