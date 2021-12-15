import {Request, Response, NextFunction} from "express";
import {verify, VerifyErrors} from "jsonwebtoken";
import {Status} from "../interfaces/Status";
import {User} from "../interfaces/User";
import {IncomingHttpHeaders} from "http";

export function isLoggedIn(request: Request, response: Response, nextFunction: NextFunction) : Response | void {

    let status: Status = {status: 400, message: "Please Login", data: null};

    const sessionUser = (request: Request): User | undefined => request.session?.user ?? undefined;

    const  signature = (request: Request): string => request.session?.signature ?? "no signature"

    const isSessionActive = (isUserActive: User | undefined): boolean => isUserActive ? true : false

    const getJwtTokenFromHeader = (headers: IncomingHttpHeaders): string | undefined => {
        return headers["authorization"]
    };

    const unverifiedJwtToken: string | undefined = getJwtTokenFromHeader(request.headers);

    const isJwtVaild = (unverifiedJwtToken: string | undefined): boolean => {
        if (unverifiedJwtToken === undefined) {
            return false
        }
        const result: unknown = verify(
            unverifiedJwtToken,
            signature(request),
            {maxAge: "3hr"},
            (error: VerifyErrors | null): boolean => error ? false : true ) as unknown

        console.log(result)
        return result as boolean
    }
    return isJwtVaild(unverifiedJwtToken) && isSessionActive(sessionUser(request)) ? nextFunction() : response.json(status);

}