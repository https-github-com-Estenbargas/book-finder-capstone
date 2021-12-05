import {connect} from "../database.utils";
import {UserBook} from "../interfaces/UserBook";

export async function deleteUserBook(userBook: UserBook) {
    try {
        const mySqlConnection = await connect()
        const mySqlDelete = "DELETE FROM userBook WHERE userBookBookId = UUID_TO_BIN(:userBookBookId) AND userBookUserId = UUID_TO_BIN(:userBookUserId)"
        const result = await mySqlConnection.execute(mySqlDelete, userBook)
        return "UserBook successfully deleted"
    } catch(error) {
        throw error
    }
}