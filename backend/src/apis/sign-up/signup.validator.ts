import {Schema} from "express-validator";

export const signupValidator: Schema = {
    userEmail: {
        isEmail: {
            errorMessage: "Please Provide a Valid Email."
        },
        trim: true
    },
    userName: {
        trim: true,
        isLength: {
            errorMessage: "Username Must Be 5-20 Characters.",
            options: {min:5, max: 32}
        }

    },
    userPassword: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: "Password Must Be at least 8 Characters.",
            options: {min:8}
        }
    }
}