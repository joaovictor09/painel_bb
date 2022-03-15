import { Request, Response } from 'express';
import { ListAllSegmentsService } from '../../services/Segments/ListAllSegmentsService';

export class ListAllSegmentsController {
  async handle(request: Request, response: Response) {

    const listAllSegmentsService = new ListAllSegmentsService();
    const segments = await listAllSegmentsService.execute();

    return response.json(segments);
  }
}