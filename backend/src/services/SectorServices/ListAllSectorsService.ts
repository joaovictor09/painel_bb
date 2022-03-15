import { PrismaClient } from "@prisma/client";


export class ListAllSectorsService {
    async execute() {

        const prismaClient = new PrismaClient()

        const sectors = await prismaClient.sector.findMany()

        return sectors

    }
}