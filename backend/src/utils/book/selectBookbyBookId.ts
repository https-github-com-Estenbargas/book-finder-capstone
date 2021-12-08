import {connect} from "../database.utils";
import {Book} from "../interfaces/Book";
import {RowDataPacket} from "mysql2";

export async function selectBookByBookId(bookId: string) : Promise<Book|null> {
    try {
        const mysqlConnection = await connect()
        const mysqlQuery = "SELECT BIN_TO_UUID(bookId) as bookId, bookAuthor, bookDescription, bookGenre, bookImage, bookIsbn, bookPublisher, bookTitle FROM book WHERE bookId = UUID_TO_BIN(:bookId)"
        const result = await mysqlConnection.execute(mysqlQuery, {bookId}) as RowDataPacket
        const books = result[0] as Book[]
        return books.length === 1 ? {...books[0]} : null

    }catch (error) {
        console.error(error)
        throw error
    }

}