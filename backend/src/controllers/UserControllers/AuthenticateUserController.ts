import { Request, Response } from "express";
import { AuthenticateUserService } from "../../services/UserServices/AuthenticateUserService";


export class AuthenticateUserController {

    async handle(request: Request, response:Response) {

        const { email, password } = request.body

        const authenticateUservice = new AuthenticateUserService();

        const token = await authenticateUservice.execute({
            email,
            password
        })

        return response.json(token)
    }

}