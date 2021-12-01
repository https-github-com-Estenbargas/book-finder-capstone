import {Request, Response} from "express";
import {setActivationToken, setHash} from "../../utils/auth.utils";
import {User} from "../../utils/interfaces/User"
import {Status} from "../../utils/interfaces/Status";
import MailComposer from "nodemailer/lib/mail-composer";
import {insertUser} from "../../utils/user/insertUser";
import Mailgun from "mailgun.js"
import formData from "form-data"
import Client from "mailgun.js/dist/lib/client";

export async function signupUserController(request: Request, response: Response) : Promise<Response|undefined> {
    try {
        const mailgun = new Mailgun(formData)
        const mailgunClient: Client = mailgun.client({username: "api", key: <string> process.env.MAILGUN_API_KEY})
        const {userName, userEmail, userPassword} = request.body;
        const userHash = await setHash(userPassword);
        const userActivationToken = setActivationToken();
        const userImage = "http://www.fillmurray.com/150/150"
        const basePath = `${request.protocol}://${request.get("host")}${request.originalUrl}activation/${userActivationToken}`
        console.log(userActivationToken)

        const message = `<h2>Welcome To Book Shelph!</h2> <p>In order to continue, you must confirm your account.</p> <p><a href="${basePath}">${basePath}</a></p>`

        const mailgunMessage = {
            from: `Book Shelph <signup@${process.env.MAILGUN_DOMAIN}>`,
            to: userEmail,
            subject: "Please Confirm Account",
            text: "Email Verification",
            html: message
        };

        const user: User = {
            userId: null,
            userActivationToken,
            userEmail,
            userHash,
            userImage,
            userName
        };

        await insertUser(user)

        const status: Status = {
            status: 200,
            message: "Profile Successfully Created Please Check Your Email.",
            data: null
        };
        await  mailgunClient.messages.create(<string>process.env.MAILGUN_DOMAIN, mailgunMessage)
        return response.json(status)

    } catch (error: any){
        const status: Status = {
            status: 500,
            message: error.message,
            data: null
        };

        return response.json(status);
    }
}