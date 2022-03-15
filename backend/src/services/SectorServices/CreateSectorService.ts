import { PrismaClient } from "@prisma/client";


export class CreateSectorService{
    async execute(name: string){

        const prismaClient = new PrismaClient();

        const sector = await prismaClient.sector.create({
            data: {
                name
            }
        });

        return sector;

    }
}