import {connect} from "../database.utils";
import {User} from "../interfaces/User";
import {RowDataPacket} from "mysql2";

export async function selectUserByUserId(userId: string) : Promise<User|null> {
    try {
        const mysqlConnection = await connect()
        const mysqlQuery = "SELECT BIN_TO_UUID(userId) as userId, userActivationToken, userEmail, userHash, userImage, userName FROM user WHERE userId = UUID_TO_BIN(:userId)"
        const result = await mysqlConnection.execute(mysqlQuery, {userId}) as RowDataPacket
        const users = result[0] as User[]
        return users.length === 1 ? {...users[0]} : null

    }catch (error) {
        console.error(error)
        throw error
    }

}