import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {selectBookByBookId} from "../../utils/book/selectBookbyBookId";
import {selectPartialBookByBookId} from "../../utils/book/selectPartialBookbyBookId";



export async function getBookByBookId(request: Request, response: Response) : Promise<Response> {
    try {
        const {bookId} = request.params;
        const mysqlResult = await selectBookByBookId(bookId);
        const data = mysqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    }catch (error: any) {
        return response.json({status: 400, data:null, message: error.message})
    }
}
