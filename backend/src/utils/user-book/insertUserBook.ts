import {connect} from "../database.utils";
import {UserBook} from "../interfaces/UserBook"

export async function insertUserBook(userBook: UserBook) : Promise<string>{
    try{
        const mysqlConnection = await connect();
        console.log(userBook)
        const query : string = "INSERT into userBook(userBookBookId, userBookUserId, userBookCollection, userBookFavorite) VALUES (UUID_TO_BIN(:userBookBookId), UUID_TO_BIN(:userBookUserId), 1, 1)";
        await mysqlConnection.execute(query, userBook)
        return "Profile Successfully Created"
    }   catch (error) {
        throw error
    }
}