import { Router } from "express";
import { ClientPlanRoutes } from "./routes/clientsPlansRoutes";
import { ClientsRoutes } from "./routes/ClientsRoutes";
import { SectorRoutes } from "./routes/sectorsRoutes";
import { SegmentsRoutes } from "./routes/segmentsRoutes";
import { UserRoutes } from "./routes/userRoutes";



const router = Router()


router.get("/api/", (req, res) => res.send("Hello World!"));

router.use(UserRoutes);
router.use(SectorRoutes);
router.use(ClientPlanRoutes);
router.use(SegmentsRoutes);
router.use(ClientsRoutes)


export { router };

