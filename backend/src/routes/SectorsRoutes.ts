import { Router } from "express";
import { CreateSectorController } from "../controllers/SectorControllers/CreateSectorController";
import { DeleteSectorController } from "../controllers/SectorControllers/DeleteSectorController";
import { FindSectorByIdController } from "../controllers/SectorControllers/FindSectorByIdController";
import { ListAllSectorsController } from "../controllers/SectorControllers/ListAllSectorsController";
import { UpdateSectorController } from "../controllers/SectorControllers/UpdateSectorController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


const router = Router()

//SECTOR CONTROLLERS

const createSectorController = new CreateSectorController()
const deleteSectorController = new DeleteSectorController()
const findSectorByIdController = new FindSectorByIdController()
const listAllSectorsController = new ListAllSectorsController()
const updateSectorController = new UpdateSectorController()


//SECTOR ROUTES

router.post(
    "/api/sector",
    ensureAuthenticated,
    ensureAdmin,
    createSectorController.handle
)

router.get(
    "/api/sector",
    ensureAuthenticated,
    listAllSectorsController.handle
)

router.get(
    "/api/sector/:id",
    ensureAuthenticated,
    findSectorByIdController.handle
)

router.put(
    "/api/sector",
    ensureAuthenticated,
    ensureAdmin,
    updateSectorController.handle
)

router.delete(
    "/api/sector/:id",
    ensureAuthenticated,
    ensureAdmin,
    deleteSectorController.handle
)

export { router as SectorRoutes };

