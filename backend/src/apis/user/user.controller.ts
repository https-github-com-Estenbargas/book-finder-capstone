import {Request, Response} from "express";
import {User, PartialUser} from "../../utils/interfaces/User";
import {selectUserByUserId} from "../../utils/user/getUserByUserId";
import {selectPartialUserByUserId} from "../../utils/user/getPartialUserByUserId";
import {Status} from "../../utils/interfaces/Status";
import {updateUser} from "../../utils/user/updateUser";
import {selectUserByUserEmail} from "../../utils/user/selectUserByUserEmail";
import {selectAllUsers} from "../../utils/user/getAllUsers";

export async function putUserController(request: Request, response: Response) : Promise<Response>{
    try {
        const {userId} = request.params
        const {userImage, userName} = request.body
        const user = <User>request.session.user
        const sessionUserId = <string>user.userId

        const preformUpdate = async (partialUser: PartialUser) : Promise<Response> => {
            const previousUser: User = await selectUserByUserId(<string>partialUser.userId) as User
            const updatedProfile: User = {...previousUser, ...partialUser}
            await updateUser(updatedProfile)
            return response.json({status: 200, data: null, message: "Profile successfully updated"})
        }
        const updateFailed = (message: string) : Response => {
            return response.json ({status:400, data: null, message})
        }
        return userId === sessionUserId ? preformUpdate({userId, userImage, userName}) : updateFailed("you are not allowed to preform this action")
    }catch (error: any) {
        return response.json( {status:400, data: null, message: error.message})
    }
}

export async function getUserByUserId(request: Request, response: Response) : Promise<Response> {
    try {
        const {userId} = request.params;
        const mysqlResult = await selectUserByUserId(userId);
        const data = mysqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    }catch (error: any) {
        return response.json({status: 400, data:null, message: error.message})
    }
}

export async function  getPartialUserByUserId(request: Request, response: Response) : Promise<Response> {
    try {
        const {userId} = request.params;
        const mysqlResult = await selectPartialUserByUserId(userId);
        const data = mysqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    }catch (error: any) {
        return response.json({status: 400, data:null, message: error.message})
    }
}
export async function getUserByUserEmail(request: Request, response: Response) : Promise<Response> {
    try {
        const {userEmail} = request.params;
        const mysqlResult = await selectUserByUserEmail(userEmail);
        const data = mysqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    }catch (error: any) {
        return response.json({status: 400, data:null, message: error.message})
    }
}
export async function getAllUsers(request: Request, response: Response) : Promise<Response> {
    try {
        const data = await selectAllUsers();

        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    }catch (error: any) {
        return response.json({status: 500, data:[], message: error.message})
    }
}
