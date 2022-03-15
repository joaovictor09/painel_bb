import { Request, Response } from "express";
import { UserUpdateYourselfService } from "../../services/UserServices/UserUpdateYourselfService";


export class UserUpdateYourselfController {
    async handle(request: Request, response: Response) {

        const { userId } = request
        const { celphone, name, nickname } = request.body

        const userUpdateYourselfService = new UserUpdateYourselfService()

        const user = await userUpdateYourselfService.execute({userId, celphone, name, nickname})

        return response.json(user)
    }
}