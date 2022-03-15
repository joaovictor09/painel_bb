import { Request, Response } from 'express';
import { FindUserByTokenService } from '../../services/UserServices/FindUserByTokenService';

export class FindUserByTokenController {
  async handle(request: Request, response: Response) {
    const { token } = request.params
    const findUserByTokenService = new FindUserByTokenService()
    const tokenDecoded = await findUserByTokenService.execute(token)
    return response.json(tokenDecoded);
  }
}