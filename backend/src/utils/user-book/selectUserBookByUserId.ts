import {UserBook} from "../interfaces/UserBook";
import {connect} from "../database.utils";
import {RowDataPacket} from "mysql2";

export async function selectUserBookByUserId(userId: string): Promise<UserBook[]> {
    try {
        const mysqlConnection = await connect();
        const mySqlSelectQuery = 'SELECT BIN_TO_UUID(userBookBookId) as userBookBookId, BIN_TO_UUID(userBookUserId) as userBookUserId,  userBookFavorite, userBookCollection FROM userBook WHERE userBookUserId = UUID_TO_BIN(:userId)'
        const result : RowDataPacket[]= await mysqlConnection.execute(mySqlSelectQuery, {userId}) as RowDataPacket[]
        // console.log(result)
        return result[0] as UserBook[]
    } catch(error) {
        throw error
    }
}
