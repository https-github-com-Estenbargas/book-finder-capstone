import {connect} from "../database.utils";
import {PartialBook} from "../interfaces/Book";
import {RowDataPacket} from "mysql2";

export async function selectRandomBooks() : Promise<PartialBook[]> {
    try{
        const mysqlConnection = await connect();
        const mysqlQuery : string = "SELECT BIN_TO_UUID(userId) as userId, userImage, userName FROM user ORDER BY RAND() LIMIT 30"
        const result: RowDataPacket[] = await mysqlConnection.execute(mysqlQuery) as RowDataPacket[]
        return  result[0] as Array<PartialBook>
    } catch (error) {
        throw error
    }
}
