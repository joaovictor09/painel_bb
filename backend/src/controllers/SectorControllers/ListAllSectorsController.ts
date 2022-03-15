import { Request, Response } from "express";
import { ListAllSectorsService } from "../../services/SectorServices/ListAllSectorsService";


export class ListAllSectorsController{
    async handle(request: Request, response: Response) {

        const listAllSectorsService = new ListAllSectorsService()
        const users = await listAllSectorsService.execute()

        return response.status(200).json(users)
    }
}