import {connect} from "../database.utils";
import {RowDataPacket} from "mysql2";
import {Visited} from "../interfaces/Visited";

export async function selectVisitedByVisitedId(visitedId: string): Promise<Visited|null> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery: string = "SELECT BIN_TO_UUID(visitedId) as visitedId, BIN_TO_UUID(visitedBookId) as visitedBookId, BIN_TO_UUID(visitedUserId) as visitedUserId FROM visited WHERE visitedId = UUID_TO_BIN(:visitedId)";
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {visitedId}) as RowDataPacket[];
        const visits: Visited[] = result[0] as Array<Visited>;
        return visits.length === 1 ? {...visits[0]} : null
    } catch(error) {
        throw error
    }
}