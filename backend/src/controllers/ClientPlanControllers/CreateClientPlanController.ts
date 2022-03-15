import { Request, Response } from "express";
import { CreateClientPlanService } from "../../services/ClientPlanServices/CreateClientPlanService";


export class CreateClientPlanController {
    async handle(request: Request, response: Response) {

        const { plan_service, plan_type } = request.body

        const createClientPlanService = new CreateClientPlanService()
        

        const plan = await createClientPlanService.execute({plan_service, plan_type})

        return response.status(200).json(plan)
    }
}