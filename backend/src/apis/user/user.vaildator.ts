import {Schema} from "express-validator";

export const userVaildator : Schema = {
    userId: {
        isUUID: {
            errorMessage: "Please Provide A Valid UserId"
        },
        trim: true
    },
    userEmail: {
      isEmail: {
          errorMessage: "Please Provide A Valid Email"
      }

    },
    userImage: {
        optional: true,
        isURL: {
            errorMessage: "Profile Avatar Is Malformed Please Upload A New Image"
        }
    },
    userName: {
        trim: true,
        isLength:{
         options: {min: 5, max: 32},
         errorMessage: "Username Must Be 5-20 Characters "
        }

    }

}