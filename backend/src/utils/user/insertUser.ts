import {connect} from "../database.utils";
import {User} from "../interfaces/User"

export async function insertUser(user: User) : Promise<string>{
    try{
        const mysqlConnection = await connect();
        const query : string = "INSERT INTO user(userId, userActivationToken, userEmail, userHash, userImage, userName) VALUES (UUID_TO_BIN(UUID()) , :userActivation, :userEmail, :userHash, :userImage, :userName)";
        await mysqlConnection.execute(query, user)
        return "Profile Successfully Created"
    }   catch (error) {
            throw error
    }
}