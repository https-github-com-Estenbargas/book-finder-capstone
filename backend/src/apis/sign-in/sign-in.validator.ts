import {Schema} from "express-validator";

export const signInValidator : Schema = {
    userPassword: {
        isLength: {
            errorMessage: "Password must be at least eight characters long.",
            options: {min: 8}
        },
        trim: true,
        escape: true
    },
    userEmail: {
        isEmail: {
            errorMessage: "Please provide a valid email."
        },
        trim: true
    }
}