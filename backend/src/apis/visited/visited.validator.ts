import {Schema} from "express-validator";

export const visitedValidator: Schema = {
    visitedBookId: {
        isUUID: {
            errorMessage: "Please provide a valid visitedBookId."
        }
    }
}