import { Request, Response } from "express";
import { UpdateSectorService } from "../../services/SectorServices/UpdateSectorService";


export class UpdateSectorController{
    async handle(request: Request, response: Response) {

        const { id, name } = request.body

        const updateSectorService = new UpdateSectorService()
        const sector = await updateSectorService.execute({ id, name })

        return response.status(200).json(sector)

    }
}