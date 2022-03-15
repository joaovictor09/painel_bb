import { Request, Response } from "express"
import { DeleteClientPlanService } from "../../services/ClientPlanServices/DeleteClientPlanService"


export class DeleteClientPlanController {
    async handle(request: Request, response: Response) {

        const { id } = request.params

        const deleteClientPlanService = new DeleteClientPlanService()
        
        await deleteClientPlanService.execute(id)

        return response.status(200).json({})
    }
}