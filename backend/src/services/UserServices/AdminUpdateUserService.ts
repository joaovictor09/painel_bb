import { hash } from "bcryptjs";

import { PrismaClient } from "@prisma/client";

interface IUserUpdate{
    id: string;
    name: string;
    nickname: string;
    email: string;
    password: string;
    celphone: string;
    admin: boolean;
    sectorId: string
}

export class AdminUpdateUserService {

    async execute({ id, name, nickname, email, password, celphone, admin, sectorId }: IUserUpdate) {

        const prismaClient = new PrismaClient()

        /**
         * GENERATE NEW PASSWORD HASH
         * FOR STORE IN THE DATABASE
         */

        const passwordHash = await hash(password, 8)

        /**
         * STORE IN THE DATABASE AND RETURN 
         */

        return await prismaClient.user.update({
            where: {
                id,
            },
            data: {
                name,
                nickname,
                email,
                password: passwordHash,
                celphone,
                admin,
                sectorId
            }
        })

    }
}