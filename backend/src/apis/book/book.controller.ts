import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {selectBookByBookId} from "../../utils/book/selectBookbyBookId";
import {selectAllBooks} from "../../utils/book/selectAllBooks";
import {selectRandomBooks} from "../../utils/book/selectRandomBooks";
import {selectBookByUserBookBookId} from "../../utils/book/selectBookByUserBookBookId";
import {selectAllBooksByGenre} from "../../utils/book/selectAllBooksByGenre";

export async function getAllBooks(request: Request, response: Response) : Promise<Response> {
    try {
        const data = await selectAllBooks();

        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    }catch (error: any) {
        return response.json({status: 500, data:[], message: error.message})
    }
}
export async function getAllBooksByGenre(request: Request, response: Response) : Promise<Response> {
    try {
        const data = await selectAllBooksByGenre();

        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    }catch (error: any) {
        return response.json({status: 500, data:[], message: error.message})
    }
}

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

export async function getRandomBooks(request: Request, response: Response) : Promise<Response> {
    try {
        const data = await selectRandomBooks();
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    }catch (error: any) {
        return response.json({status: 400, data:null, message: error.message})
    }
}
export async function getBookByUserBookBookId(request: Request, response: Response) : Promise<Response> {
    try {
        const {userBookBookId} = request.params
        const data = await selectBookByUserBookBookId(userBookBookId);
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    }catch (error: any) {
        return response.json({status: 400, data:null, message: error.message})
    }
}