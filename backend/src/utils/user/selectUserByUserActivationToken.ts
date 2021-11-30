import {connect} from "../database.utils"
import {User} from "../interfaces/User";
import {RowDataPacket} from "mysql2";

export async function selectUserByUserActivationToken(userActivationToken: string) : Promise<User|null> {
    try {
        const mysqlConnection = await connect();
        const mysqlQuery: string = "SELECT BIN_TO_UUID(userId) as userId, userEmail, userImage, userName FROM user WHERE userId = UUID_TO_BIN(:profileId)"
        const result = await mysqlConnection.execute(mysqlQuery, {userActivationToken}) as RowDataPacket[]
        const rows: User[] = result[0] as User[]
        return rows.length === 1 ? {...rows[0]} : null;
    } catch (error) {
        throw error
    }
}