import {User} from "../interfaces/User";
import {connect} from "../database.utils";


export async function updateUser(user: User): Promise<string> {
    try {
        console.log(user)
        const  mysqlConnection = await connect();
        const myQuery : string = "UPDATE user SET userActivationToken = :userActivationToken, userEmail = :userEmail, userImage = :userImage, userName = :userName WHERE userId = UUID_TO_BIN(:userId)";
        await mysqlConnection.execute(myQuery, user)
        return "Profile Successfully Updated"
        } catch (error) {
            throw error
    }

}