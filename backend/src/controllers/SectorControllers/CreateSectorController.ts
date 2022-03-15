import { Request, Response } from "express";
import { CreateSectorService } from "../../services/SectorServices/CreateSectorService";

export class CreateSectorController{
    async handle(request: Request, response:Response) {

        const { name } = request.body

        const createSectorService = new CreateSectorService()
        const sector = await createSectorService.execute(name)

        return response.status(200).json(sector)

    }
}