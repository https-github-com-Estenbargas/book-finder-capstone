import {connect} from "../database.utils";
import {RowDataPacket} from "mysql2";

export async function selectVisitedByVisitedUserId(userId: string) {
    try {
        const mySqlConnection = await connect();
        const query: string = "SELECT BIN_TO_UUID(visitedUserId) as visitedUserId FROM visited INNER JOIN book ON bookId = visitedBookId WHERE visitedUserId = UUID_TO_BIN(:userId)";
        const result = await <RowDataPacket>mySqlConnection.execute(query, {userId});
        return result[0]
    } catch (error) {
        throw error
    }
}