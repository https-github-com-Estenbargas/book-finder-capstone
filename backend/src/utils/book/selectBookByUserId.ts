import {PartialBook} from "../interfaces/Book"
import {connect} from "../database.utils";
import {RowDataPacket} from "mysql2";


export async function selectBookByUserId(userId: string) : Promise<PartialBook|null> {
    try {
        const mysqlConnection = await connect()
        const mysqlQuery = "SELECT BIN_TO_UUID(bookId) as bookId, bookAuthor, bookDescription, bookGenre, bookImage, bookTitle FROM book WHERE  = UUID_TO_BIN(:userId)"
        const result = await mysqlConnection.execute(mysqlQuery, {userId}) as RowDataPacket
        const books = result[0] as PartialBook[]
        return books.length === 1 ? {...books[0]} : null

    }catch (error) {
        console.error(error)
        throw error
    }

}