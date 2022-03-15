import { PrismaClient } from "@prisma/client";

interface IUser{
    userId: string,
    name: string;
    nickname: string;
    celphone: string;
}

export class UserUpdateYourselfService {
    async execute({userId, name, nickname, celphone }:IUser) {

        const prismaClient = new PrismaClient();

        //UPDATE THE USER DATA

        return await prismaClient.user.update({
            where: {
                id: userId
            },
            data: {
                name,
                nickname,
                celphone
            }
        });

    }
}