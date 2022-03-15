import { Router } from "express";
import { AdminUpdateUserController } from "../controllers/UserControllers/AdminUpdateUserController";
import { AuthenticateUserController } from "../controllers/UserControllers/AuthenticateUserController";
import { CreateUserController } from "../controllers/UserControllers/CreateUserController";
import { DeleteUserController } from "../controllers/UserControllers/DeleteUserController";
import { FindUserByIdController } from "../controllers/UserControllers/FindUserByIdController";
import { FindUserByTokenController } from "../controllers/UserControllers/FindUserByTokenController";
import { ListAllUsersController } from "../controllers/UserControllers/ListAllUsersServiceController";
import { UserUpdateYourselfController } from "../controllers/UserControllers/UserUpdateYourselfController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()
const deleteUserController = new DeleteUserController()
const userUpdateYourselfController = new UserUpdateYourselfController()
const adminUpdateUserController = new AdminUpdateUserController()
const listAllUsersController = new ListAllUsersController()
const findUserByIdController = new FindUserByIdController()
const findUserByTokenController = new FindUserByTokenController()


const router = Router()



router.get(
    "/api/users",
    ensureAuthenticated,
    listAllUsersController.handle
)

router.get(
    "/api/users/:id",
    ensureAuthenticated,
    findUserByIdController.handle
)

router.get(
    "/api/users/token/:token",
    ensureAuthenticated,
    findUserByTokenController.handle
)

router.post(
    "/api/login",
    authenticateUserController.handle
)

router.post(
    "/api/users",
    //ensureAuthenticated,
    //ensureAdmin,
    createUserController.handle
)

router.delete(
    "/api/users/:deleteUserId",
    ensureAuthenticated,
    ensureAdmin,
    deleteUserController.handle
)

router.put(
    "/api/updateself",
    ensureAuthenticated,
    userUpdateYourselfController.handle
)

router.put(
    "/api/adminupdate",
    ensureAuthenticated,
    ensureAdmin,
    adminUpdateUserController.handle
)

export { router as UserRoutes };

