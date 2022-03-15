import { Router } from 'express';
import { CreateSegmentController } from '../controllers/Segments/CreateSegmentController';
import { DeleteSegmentController } from '../controllers/Segments/DeleteSegmentController';
import { FindSegmentByIdController } from '../controllers/Segments/FindSegmentByIdController';
import { ListAllSegmentsController } from '../controllers/Segments/ListAllSegmentsController';
import { UpdateSegmentController } from '../controllers/Segments/UpdateSegmentController';
import { ensureAdmin as admin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated as authenticated } from "../middlewares/ensureAuthenticated";


const router = Router();

const createSegmentController = new CreateSegmentController();
const deleteSegmentController = new DeleteSegmentController();
const updateSegmentController = new UpdateSegmentController();
const listAllSegmentsController = new ListAllSegmentsController();
const findSegmentByIdController = new FindSegmentByIdController()

const DEFAULT_URL = '/api/segments';

router.get(
   DEFAULT_URL,
   authenticated,
   listAllSegmentsController.handle
);

router.get(
   `${DEFAULT_URL}/:id`,
   authenticated,
   findSegmentByIdController.handle
);

router.post(
   DEFAULT_URL,
   authenticated,
   admin,
   createSegmentController.handle
);

router.put(
   DEFAULT_URL,
   authenticated,
   admin,
   updateSegmentController.handle
);

router.delete(
   `${DEFAULT_URL}/:id`,
   authenticated,
   admin,
   deleteSegmentController.handle
);

export { router as SegmentsRoutes };

