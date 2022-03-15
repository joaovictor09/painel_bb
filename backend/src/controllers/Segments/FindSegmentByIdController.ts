import { Request, Response } from 'express';
import { FindSegmentByIdService } from '../../services/Segments/FindSegmentByIdService';

export class FindSegmentByIdController {
  async handle(request: Request, response: Response) {

    const { id } = request.body;
    const findSegmentByIdService = new FindSegmentByIdService();

    const segment = await findSegmentByIdService.execute( id );

    return response.json(segment);
  }
}