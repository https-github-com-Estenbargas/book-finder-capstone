import {getPartialBookByBookId, getBookByBookId} from "./book.controller";
import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check} from "express-validator";

export const BookRoute: Router = Router();

BookRoute.route("/")


BookRoute.route("/book/:bookId")
    .get(
        asyncValidatorController([check("bookId", "Please Provide A Valid bookId").isUUID()])
        , getBookByBookId
    )

BookRoute.route("/book-detail/:bookId")
    .get(
        asyncValidatorController([check("bookId", "Please Provide A Valid bookId").isUUID()])
        , getPartialBookByBookId
    )