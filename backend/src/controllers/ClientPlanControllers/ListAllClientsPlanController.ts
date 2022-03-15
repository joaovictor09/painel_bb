import { Request, Response } from "express";
import { ListAllClientsPlanService } from "../../services/ClientPlanServices/ListAllClientsPlanService";


export class ListAllClientsPlanController {

    async handle (request: Request, response: Response) {

        const listAllClientsPlanService = new ListAllClientsPlanService()

        const plans = await listAllClientsPlanService.execute()

        return response.status(200).json(plans)

    }

}