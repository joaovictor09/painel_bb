import { Request, Response } from "express";
import { FindSectorByIdService } from "../../services/SectorServices/FindSectorByIdService";

export class FindSectorByIdController{
    async handle(request: Request, response: Response) {

        const { id } = request.params

        const findSectorByIdService = new FindSectorByIdService()

        const sector = await findSectorByIdService.execute(id)

        return response.status(200).json(sector)

    }
}