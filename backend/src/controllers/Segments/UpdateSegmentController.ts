import { Request, Response } from 'express';
import { UpdateSegmentService } from '../../services/Segments/UpdateSegmentService';

export class UpdateSegmentController {
  async handle(request: Request, response: Response) {

    const { id, name } = request.body;
    const updateSegmentService = new UpdateSegmentService();

    const segment = await updateSegmentService.execute({ id, name });
    
    return response.json(segment);
  }
}