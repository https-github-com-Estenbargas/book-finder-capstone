import {Schema} from 'express-validator';

export const UserBookPostValidator : Schema = {
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
    },
    userBookCollection: {
        trim: true,
        isLength: {
            errorMessage: "UserBookCollection must be 0 or 1",
            options: {min:1, max:1}
        }
    },
    userBookFavorite: {
        trim: true,
        isLength: {
            errorMessage: "UserBookFavorite must be 0 or 1",
            options: {min: 1, max: 1}
        }
    }
}