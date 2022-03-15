import { Request, Response } from 'express';
import { CreateSegmentService } from '../../services/Segments/CreateSegmentService';

export class CreateSegmentController {
  async handle(request: Request, response: Response) {

    const { name } = request.body;

    const createSegmentService = new CreateSegmentService();
    const segment = await createSegmentService.execute(name);

    return response.json(segment);
  }
}