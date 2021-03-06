import {Schema} from 'express-validator';

export const UserBookValidator : Schema = {
    userBookBookId: {
        isUUID: {
            errorMessage: "Please Provide A Valid userBookBookId"
        },
        trim: true
    },
    userBookUserId: {
        trim: true,

        isUUID: {
            errorMessage: "Please Provide A Valid userBookUserId"
        }
    }
}