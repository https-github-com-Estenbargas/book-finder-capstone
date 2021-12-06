import {connect} from "../database.utils";
import {Visited} from "../interfaces/Visited";
import {ResultSetHeader, RowDataPacket} from "mysql2";

export async function insertVisited(visited: Visited) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO visited(visitedId, visitedBookId, visitedUserId) VALUES (UUID_TO_BIN(UUID()), UUID_TO_BIN(:visitedBookId), UUID_TO_BIN(:visitedUserId))";

        const [result] = await mySqlConnection.execute(mySqlQuery, visited) as [ResultSetHeader, RowDataPacket]
        console.log("Visited page successfully inserted!");
        return "Visited page successfully inserted!";

    } catch (error) {
        console.log(error)
        throw error
    }
}