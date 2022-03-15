import { Router } from "express";
import { CreateClientPlanController } from "../controllers/ClientPlanControllers/CreateClientPlanController";
import { DeleteClientPlanController } from "../controllers/ClientPlanControllers/DeleteClientPlanController";
import { ListAllClientsPlanController } from "../controllers/ClientPlanControllers/ListAllClientsPlanController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const router = Router()

const createClientPlanController = new CreateClientPlanController()
const listAllClientPlanController = new ListAllClientsPlanController()
const deleteClientPlanController = new DeleteClientPlanController()

const DEFAULT_URL = "/api/clientplan"

router.get(
    DEFAULT_URL,
    ensureAuthenticated,
    listAllClientPlanController.handle
)

router.get(
    `${DEFAULT_URL}/:id`,
    ensureAuthenticated
)

router.post(
    DEFAULT_URL,
    ensureAdmin,
    ensureAuthenticated,
    createClientPlanController.handle
)

router.delete(
    `${DEFAULT_URL}/:id`,
    ensureAuthenticated,
    ensureAdmin,
    deleteClientPlanController.handle
)



export { router as ClientPlanRoutes };

