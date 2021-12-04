import {Request, Response} from "express";
import {User} from "../../utils/interfaces/User";
import {Visited} from "../../utils/interfaces/Visited";
import {Status} from "../../utils/interfaces/Status";
import {selectBooksByUserId} from "../../utils/visited/selectVisitedByUserId"
import {selectUserByUserId} from "../../utils/user/getUserByUserId";

export async function postVisitedController(request: Request, response: Response) {
    try {
        const {visitedBookId} = request.body;
        const user: User = request.session.user as User;
        const visitedUserId = <string> user.userId

        const status: Status = {
            status: 200,
            message: null,
            data: null
        };
        return response.json(status);
    } catch (error) {
        console.log(error);
    }
}

export async function getVisited (request: Request, response: Response) {
    try {
        const user: User = request.session.user as User;
        const data = selectBooksByUserId(<string> user.userId);
        // const {userId} = request.params;
        // const mysqlResult = await selectVisitedByUserId(userId);
        // const data = mysqlResult ?? null
        const status: Status = {
            status: 200,
            message: null,
            data: data,
        };
        return response.json(status);
    } catch (error) {
        console.log(error);
    }
}