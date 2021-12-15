import {connect} from "../database.utils";
import {RowDataPacket} from "mysql2";
import {Visited} from "../interfaces/Visited";

export async function selectVisitedByBookId(bookId: string): Promise<Visited[]> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery: string = "SELECT BIN_TO_UUID(visitedId) as visitedId, BIN_TO_UUID(visitedBookId) as visitedBookId, BIN_TO_UUID(visitedUserId) as visitedUserId FROM visited INNER JOIN book ON visited.visitedBookId = book.bookId WHERE visitedBookId = UUID_TO_BIN(:bookId)";
const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {bookId});
return result[0] as Visited[]
    } catch(error) {
        throw error
    }
}