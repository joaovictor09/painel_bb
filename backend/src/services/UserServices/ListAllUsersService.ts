import { PrismaClient } from "@prisma/client";


export class ListAllUsersService{
    async execute() {

        const prismaClient = new PrismaClient()

        /**
         * LIST ALL USERS AND RETURN
         * ID, NICKNAME AND SECTOR NAME
         */

        const users = await prismaClient.user.findMany({
            select: {
                id: true,
                nickname: true,
                sector: {
                    select: {
                        name: true
                    }
                }
            }
        })

        return users

    }
}