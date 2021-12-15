import {UserBook} from "../interfaces/UserBook"
import {connect} from "../database.utils";
import {RowDataPacket} from "mysql2";


export async function selectBooksByUserId(userId: string) : Promise<UserBook[]> {
    try {
        const mysqlConnection = await connect()
        const mysqlQuery = "SELECT BIN_TO_UUID(userBookBookId) as userBookBookId, BIN_TO_UUID(userBookUserId) as userBookUserId FROM userBook INNER JOIN book on userBook.userBookBookId = book.bookId WHERE userBookUserId = UUID_TO_BIN(:userId)"
        const result = await mysqlConnection.execute(mysqlQuery, {userId}) as RowDataPacket
        return result[0] as UserBook[]

    }catch (error) {
        console.error(error)
        throw error
    }

}