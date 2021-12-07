import {connect} from "../database.utils";
import {Book} from "../interfaces/Book";
import {RowDataPacket} from "mysql2";

export async function selectRandomBooks() : Promise<Book[]> {
    try{
        const mysqlConnection = await connect();
        const mysqlQuery : string = "SELECT BIN_TO_UUID(bookId) as bookId, bookAuthor, bookDescription, bookGenre, bookImage, bookIsbn, bookPublisher, bookTitle FROM book ORDER BY RAND() LIMIT 30"
        const result: RowDataPacket[] = await mysqlConnection.execute(mysqlQuery) as RowDataPacket[]
        return  result[0] as Array<Book>
    } catch (error) {
        throw error
    }
}
