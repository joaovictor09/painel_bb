import { PrismaClient } from "@prisma/client";


interface ISector {
    id: string;
    name: string;
}

export class UpdateSectorService{
    async execute({ id, name }: ISector) {

        const prismaClient = new PrismaClient()

        const sector = await prismaClient.sector.findUnique({
            where: {
                id
            }
        })

        if (!sector) {
            throw new Error("Sector dont exists!")
        }

        const newSector = await prismaClient.sector.update({
            where: {
                id
            },
            data: {
                name
            }
        })

        return newSector

    }
}