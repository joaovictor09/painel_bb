import { PrismaClient } from "@prisma/client";


export class FindUserByIdService {
    async execute(id: string) {

        const prismaClient = new PrismaClient();

        /**
         * FIND THE USER
         * IF EXISTS
         * RETURN THE ID, NAME, NICKNAME, EMAIL, CELPHONE AND SECTOR NAME
         * ELSE
         * RETURN A ERROR
         */

        const user = await prismaClient.user.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                name: true,
                nickname: true,
                email: true,
                celphone: true,
                sector: {
                    select: {
                        name: true
                    }
                }
            }
        });

        if (!user) {
            throw new Error("User dont exists!");
        }

        return user

    }
}