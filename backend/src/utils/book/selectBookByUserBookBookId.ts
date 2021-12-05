import {UserBook} from "../interfaces/UserBook";
import {connect} from "../database.utils";
import {RowDataPacket} from "mysql2";


export async function selectBookByUserBookBookId(userBookBookId: string): Promise<UserBook|null> {
    try {
        const mysqlConnection = await connect();
        const mysqlQuery = "SELECT BIN_TO_UUID(bookId) as bookId, bookAuthor, bookDescription, bookGenre, bookImage, bookIsbn, bookPublisher, bookTitle FROM book INNER JOIN userBook ON book.bookId = userBook.userBookBookId WHERE bookId = UUID_TO_BIN(:userBookBookId)"
        const result : RowDataPacket[]= await mysqlConnection.execute(mysqlQuery, {userBookBookId}) as RowDataPacket[]
        const rows: UserBook[] = result[0] as UserBook[]
        return rows.length !== 0 ? {...rows[0]} : null;
    } catch(error) {
        throw error
    }
}