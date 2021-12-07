
import {User} from "../../utils/interfaces/User";
import {Status} from "../../utils/interfaces/Status";
import {UserBook} from "../../utils/interfaces/UserBook";
import {selectUserBookByPrimaryKey} from "../../utils/user-book/selectUserBookByPrimaryKey";
import {insertUserBook} from "../../utils/user-book/insertUserBook";
import {deleteUserBook} from "../../utils/user-book/deleteUserBook"
import {selectUserBookByUserId} from "../../utils/user-book/selectUserBookByUserId";
import {selectBooksByUserId} from "../../utils/book/selectBookByUserId";
import {selectUserBookByUserBookBookId} from "../../utils/user-book/selectUserBookByUserBookBookId";
import {selectUserBookByUserBookUserId} from "../../utils/user-book/selectUserBookByUserBookUserId";
import {Request, Response} from "express";

export async function toggleUserBookController(request: Request, response: Response) : Promise<Response<Status>> {
   try {
       const {userBookBookId, userBookFavorite, userBookCollection} = request.body
       const user = <User>request.session.user as User
       const userBookUserId = <string>user.userId

       const userBook: UserBook = {
           userBookBookId,
           userBookUserId,
           userBookFavorite,
           userBookCollection,
       }

       const select = await selectUserBookByPrimaryKey(userBook)
       let result = null
       // @ts-ignore
       if (select === null) {
            result = await insertUserBook(userBook)
       }else{
           result = await deleteUserBook(userBook)
       }

       const status: Status = {
           status: 200,
           message: "UserBook successfully updated",
           data: null
       };

       return response.json(result)

   }catch (error: any) {
        return response.json({status: 500, message: error.message , data: null})
   }

}

export async function getAllUserBookByUserId(request: Request, response: Response) : Promise<Response<Status>> {
    try {
        const user: User = request.session.user as User;
        const userId = user.userId
        const data = await selectUserBookByUserId(<string>userId);
        const status: Status = {
            status: 200,
            message: null,
            data: data,
        };
        return response.json(status);
    } catch (error: any) {
        return response.json({status: 500, message: error.message , data: null})
    }

}

export async function getBooksByUserId(request: Request, response: Response) : Promise<Response<Status>> {
    try {
        const user: User = request.session.user as User;
        const data = await selectBooksByUserId(<string> user.userId);
        const status: Status = {
            status: 200,
            message: null,
            data: data,
        };
        return response.json(status);
    } catch (error: any) {
        return response.json({status: 500, message: error.message , data: null})
    }
}

export async function getUserBookByUserBookUserId(request: Request, response: Response) : Promise<Response<Status>> {
    try {
        const user: User = request.session.user as User;
        const userBookUserId = <string> user.userId
        const data = await selectUserBookByUserBookUserId(userBookUserId);
        const status: Status = {
            status: 200,
            message: null,
            data: data,
        };
        return response.json(status);
    } catch (error: any) {
        return response.json({status: 500, message: error.message , data: null})
    }
}

export async function getUserBookByUserBookBookId(request: Request, response: Response) : Promise<Response<Status>> {
    try {
        const {userBookBookId} = request.body
        const data = await selectUserBookByUserBookBookId(userBookBookId);
        const status: Status = {
            status: 200,
            message: null,
            data: data,
        };
        return response.json(status);
    } catch (error: any) {
        return response.json({status: 500, message: error.message , data: null})
    }
}
