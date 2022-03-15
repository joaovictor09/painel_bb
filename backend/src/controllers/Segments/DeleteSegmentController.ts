import { Request, Response } from 'express';
import { DeleteSegmentService } from '../../services/Segments/DeleteSegmentService';

export class DeleteSegmentController {
  async handle(request: Request, response: Response) {

    const { id } = request.params;

    const deleteSegmentService = new DeleteSegmentService();
    const segment = await deleteSegmentService.execute(id);

    return response.json(segment);
  }
}