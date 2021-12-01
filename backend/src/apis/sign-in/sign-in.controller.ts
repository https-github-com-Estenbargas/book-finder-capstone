import {Request, Response} from "express";
import "express-session";
import {v4 as uuid} from "uuid";
import {generateJwt, validatePassword} from "../../utils/auth.utils";
import {User} from "../../utils/interfaces/User";
import {selectUserByUserEmail} from "../../utils/user/selectUserByUserEmail";

export async function signInController(request: Request, response: Response) : Promise<Response | undefined> {

    const {userEmail} = request.body
    const mySqlResult: User | null = await selectUserByUserEmail(userEmail)
    const isEmailValid: boolean = mySqlResult ? true : false
    try {
        const authenticate = async () => {
            const {userPassword} = request.body

            // @ts-ignore isEmailValid determines mySqlResult will not be null
            const {userId, userActivationToken, userEmail, userHash, userImage, userName} = mySqlResult

            const user: User = {
                userId,
                userActivationToken,
                userEmail,
                userHash,
                userImage,
                userName
            }

            const signature: string = uuid();
            const authorization: string = generateJwt({
                userId,
                userActivationToken,
                userEmail,
                userHash,
                userImage,
                userName
            }, signature);

            const signInFailed = (message: string) => response.json({
                status: 400,
                data: null,
                message
            });
            const signInSuccessful = () => {
                if(user.userActivationToken !== null) {
                    signInFailed("Please Activate Your Account")
                }
                if(request.session) {
                    request.session.user = user
                    request.session.jwt = authorization
                    request.session.signature = signature
                }

                response.header({
                    authorization
                });
                return response.json({status: 200, data: null, message: "Sign In Successful"})
            };

            const isPasswordValid: boolean = user && await  validatePassword(user.userHash, userPassword)

            return isPasswordValid ? signInSuccessful() : signInFailed("Invalid Email Or Password");
        }
        return isEmailValid ? authenticate() : response.json({status: 400, data:null, message: "Invalid Email Or Password"})
    } catch (error: any) {
        return response.json({status: 500, data: null, message: error.message})
    }
}

