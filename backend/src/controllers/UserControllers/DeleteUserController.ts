import { Request, Response } from "express";
import { DeleteUserService } from "../../services/UserServices/DeleteUserService";


export class DeleteUserController {
    async handle(request: Request, response: Response) {

        const currentUserId = request.userId
        const { deleteUserId } = request.params

        const deleteUserService = new DeleteUserService()

        const user = await deleteUserService.execute({currentUserId, deleteUserId})
        
        return response.json({user})
    }
}