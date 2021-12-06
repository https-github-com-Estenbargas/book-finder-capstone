import {connect} from "../database.utils";
import {RowDataPacket} from "mysql2";
import {Visited} from "../interfaces/Visited";

export async function selectVisitedByUserId(userId: string): Promise<Visited[]> {
    try {
        console.log(userId)
        const mySqlConnection = await connect();
        const query: string = "SELECT BIN_TO_UUID(visitedId) as visitedId, BIN_TO_UUID(visitedBookId) as visitedBookId, BIN_TO_UUID(visitedUserId) as visitedUserId FROM visited WHERE visitedUserId = UUID_TO_BIN(:userId)";
        const result = await <RowDataPacket>mySqlConnection.execute(query, {userId});
        return result[0] as Visited[]
    } catch (error) {
        throw error
    }
}