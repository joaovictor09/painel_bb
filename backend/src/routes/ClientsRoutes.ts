import { Router } from 'express';
import { CreateClientController } from '../controllers/ClientsControllers/CreateClientController';
import { ensureAdmin as admin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated as authenticated, ensureAuthenticated } from "../middlewares/ensureAuthenticated";


const router = Router();

const createClientController = new CreateClientController()

const DEFAULT_URL = '/api/clients';

router.get(
   DEFAULT_URL
);

router.get(
   `DEFAULT_URL/:id`
);

router.post(
  DEFAULT_URL,
  authenticated,
  admin,
  createClientController.handle
);

router.put(
   DEFAULT_URL
);

router.delete(
   `DEFAULT_URL/:id`
);

export { router as ClientsRoutes };