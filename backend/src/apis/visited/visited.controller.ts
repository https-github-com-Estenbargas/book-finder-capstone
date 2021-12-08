import {Request, Response} from "express";
import {User} from "../../utils/interfaces/User";
import {Visited} from "../../utils/interfaces/Visited";
import {Status} from "../../utils/interfaces/Status";
import {insertVisited} from "../../utils/visited/insertVisited";
import {selectVisitedByUserId} from "../../utils/visited/selectVisitedByUserId";
import {selectVisitedByBookId} from "../../utils/visited/selectVisitedByBookId";
import {selectVisitedByVisitedId} from "../../utils/visited/selectVisitedByVisitedId";

export async function postVisitedController(request: Request, response: Response): Promise<Response> {
    try {
        const {visitedBookId} = request.body;
        const user: User = request.session.user as User;
        const visitedUserId = <string> user.userId
        const visited: Visited = {visitedBookId, visitedUserId, visitedId: null}
        await insertVisited(visited)
        const status: Status = {
            status: 200,
            message: "Visit record created!",
            data: null
        };
        return response.json(status);
    } catch (error) {
        console.log(error);
        return response.json({
            status: 500,
            message: "",
            data: null
        })
    }
}

export async function getVisitedByUserIdController (request: Request, response: Response): Promise<Response> {
    try {
        const user: User = request.session.user as User;
        const data = await selectVisitedByUserId(<string> user.userId);
        console.log(data)
        // const {userId} = request.params;
        // const mysqlResult = await selectVisitedByUserId(userId);
        // const data = mysqlResult ?? null
        const status: Status = {
            status: 200,
            message: null,
            data: data
        };
        return response.json(status);
    } catch (error) {
        console.log(error);
        return response.json({
            status: 500,
            message: "",
            data: null
        })
    }
}

export async function getVisitedByVisitedIdController (request: Request, response: Response): Promise<Response> {
    try {
        const {visitedId} = request.params
        const data = await selectVisitedByVisitedId(visitedId);
        const status: Status = {
            status: 200,
            message: null,
            data: data,
        };
        return response.json(status);
    } catch (error: any) {
        console.log(error)
        return response.json({
            status: 500,
            message: error.message,
            data: null
        })
    }
}

export async function getVisitedByBookId (request: Request, response: Response): Promise<Response> {
    try {
        const {bookId} = request.params
        const data = await selectVisitedByBookId(bookId);
        console.log(data)
        const status: Status = {
            status: 200,
            message: null,
            data: data,
        };
        return response.json(status);
    } catch (error: any) {
        console.log(error)
        return response.json({
            status: 500,
            message: error.message,
            data: null
        })
    }
}