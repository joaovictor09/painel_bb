import { Request, Response } from "express";
import { DeleteSectorService } from "../../services/SectorServices/DeleteSectorService";


export class DeleteSectorController {
    async handle(request: Request, response: Response) {

        const { id } = request.params;
        
        const deleteSectorService = new DeleteSectorService();
        await deleteSectorService.execute(id);
        
        return response.status(200).json({})

    }
}