import {Request, Response} from "express";
import {setActivationToken, setHash} from "../../utils/auth.utils";
import {User} from "../../utils/interfaces/User"
import {Status} from "../../utils/interfaces/Status";
import MailComposer from "nodemailer/lib/mail-composer";
import {insertUser} from "../../utils/user/insertUser";

const mailgun = require("mailgun-js")

export async function signupUserController(request: Request, response: Response) : Promise<Response|undefined> {
    try {
        const {userName, userEmail, userPassword} = request.body;
        const userHash = await setHash(userPassword);
        const userActivationToken = setActivationToken();
        const userImage = "http://www.fillmurray.com/100/150"
        const basePath = `${request.protocol}://${request.get("host")}${request.originalUrl}activation/${userActivationToken}`
        console.log(userActivationToken)

        const message = `<h2>Welcome To Book Shelph!</h2> <p>In order to continue, you must confirm your account.</p> <p><a href="${basePath}"></a></p>`

        const mailgunMessage = {
            from: `Book Shelph <signup@${process.env.MAILGUN_DOMAIN}>`,
            to: userEmail,
            subject: "Please Confirm Account",
            text: "Email Verification",
            html: message
        };

        const user: User = {
            userId: null,
            userActivation,
            userEmail,
            userHash,
            userImage,
            userName
        };

        await insertUser(User)

        const emailComposer: MailComposer = new MailComposer(mailgunMessage)

        emailComposer.compile().build((error: any, message: Buffer) => {
            const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});

            console.log(message.toString("ascii"))
            const compiledEmail = {
                to: userEmail,
                message: message.toString("ascii")
            }

            const status: Status = {
                status: 200,
                message: "Profile Successfully Created Please Check Your Email.",
                data: null
            };
            mg.messages().sendMime(compiledEmail, (sendError: any, body: any) => {
                if (sendError) {
                    return response.json({status: 418, data: null, message: "Error Sending Email"})
                }
                return response.json(status);
            });
        })
    } catch (error: any){
        const status: Status = {
            status: 500,
            message: error.message,
            data: null
        };

        return response.json(status);
    }
}