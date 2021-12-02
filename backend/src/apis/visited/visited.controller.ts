import {Request, Response} from "express";
import {User} from "../../utils/interfaces/User";
import {Visited} from "../../utils/interfaces/Visited";
import {Status} from "../../utils/interfaces/Status";
import {selectVisitedByUserId} from "../../utils/visited/selectVisitedByUserId"

export async function visited(request: Request, response: Response) {
    try {
        const {visitedId} = request.body;
        const visited: Visited = request.session?.visited;
        const visitedUserId = <string> visited.visitedUserId

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
        const user: User = request.session?.user;
        const data = selectVisitedByUserId(user.userId);
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