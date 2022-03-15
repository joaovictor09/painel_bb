import { Request, Response } from "express";
import { AdminUpdateUserService } from "../../services/UserServices/AdminUpdateUserService";


export class AdminUpdateUserController {
    async handle(request: Request, response:Response) {

        const { id, name, nickname, email, password, celphone, admin, sectorId } = request.body

        const adminUpdateUserService = new AdminUpdateUserService()
        const user = await adminUpdateUserService.execute({id, name, nickname, email, password, celphone, admin, sectorId})

        return response.json(user)

    }
}