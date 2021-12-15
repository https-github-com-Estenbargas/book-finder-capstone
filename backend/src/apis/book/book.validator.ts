import {Schema} from "express-validator";

export const bookValidator: Schema = {
    bookId: {
        isUUID: {
            errorMessage: "Please Provide a valid bookId"
        }
    }
}