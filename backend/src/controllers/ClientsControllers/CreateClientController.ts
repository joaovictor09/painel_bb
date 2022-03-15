import { Request, Response } from 'express';
import { CreateClientService } from '../../services/ClientsServices/CreateClientService';

export class CreateClientController {
  async handle(request: Request, response: Response) {

    const {
      company_name, client_name, celphone, email,
      tax, plan_id, segment_id, service_id, users_id
    } = request.body;

    const createClientService = new CreateClientService();

    const client = await createClientService.execute({
      company_name, client_name, celphone,
      email, plan_id, segment_id, service_id, users_id, tax
    });

    return response.json(client);
  }
}