import { PrismaClient } from "@prisma/client";

interface IUserDelete{
    currentUserId: string;
    deleteUserId: string;
}

export class DeleteUserService{
    async execute({currentUserId, deleteUserId}: IUserDelete) {

        const prismaClient = new PrismaClient()

        /**
         * VERIFY IF USER IS NOT TRYING DELETE YOURSELF
         */

        if(currentUserId == deleteUserId){
            throw new Error("Cant delete yourself");
        }

        /**
         * FINDING THE USER IN THE DATABASE 
         */

        const user = await prismaClient.user.findFirst({where: { id: deleteUserId }})

        if (!user) {
            throw new Error("This user dont exists");
        }

        /**
         * DELETING THE USER AND RETURNING
         */
        
        const deletedUser = await prismaClient.user.delete({
            where: {
                id: deleteUserId 
            }
        })
    
        return deletedUser;
    }
}