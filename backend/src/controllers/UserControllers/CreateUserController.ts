import { Request, Response } from "express";
import { CreateUserService } from "../../services/UserServices/CreateUserService";


export class CreateUserController{

    async handle(request: Request, response: Response) {

        const { name, email, password, admin, celphone, nickname, sectorId } = request.body

        const createUserService = new CreateUserService()

        const user = await createUserService.execute({name, admin, email, password, celphone, nickname, sectorId})

        return response.json(user)

    }

}