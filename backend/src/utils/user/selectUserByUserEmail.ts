import {connect} from "../database.utils";
import {User} from "../interfaces/User";
import {RowDataPacket} from "mysql2";

export async function selectUserByUserEmail(userEmail: string): Promise<User|null> {
    try {
        const mysqlConnection = await connect();
        const sqlQuery: string = "SELECT BIN_TO_UUID(userId) as userId, userActivationToken, userEmail, userHash, userImage, userName FROM user WHERE userEmail = :userEmail";
        const result = await mysqlConnection.execute(sqlQuery, {userEmail}) as RowDataPacket [];
        const rows: User[] = result[0] as User[];
        return rows.length === 1 ? {...rows[0]} : null;
    } catch (error) {
        throw error
    }
}