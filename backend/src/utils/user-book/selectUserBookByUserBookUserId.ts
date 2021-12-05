import {UserBook} from "../interfaces/UserBook";
import {connect} from "../database.utils";
import {RowDataPacket} from "mysql2";


export async function selectUserBookByUserBookBookId(userBookUserId: string): Promise<UserBook|null> {
    try {
        const mysqlConnection = await connect();
        const mySqlSelectQuery = 'SELECT BIN_TO_UUID(userBookUserId) as userBookBookId, BIN_TO_UUID(userBookUserId) as userBookUserId,  userBookFavorite, userBookCollection FROM userBook WHERE userBookUserId = UUID_TO_BIN(:userBookUserId)'
        const result : RowDataPacket[]= await mysqlConnection.execute(mySqlSelectQuery, {userBookUserId}) as RowDataPacket[]
        const rows: UserBook[] = result[0] as UserBook[]
        return rows.length !== 0 ? {...rows[0]} : null;
    } catch(error) {
        throw error
    }
}