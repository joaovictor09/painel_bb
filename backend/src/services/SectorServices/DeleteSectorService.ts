import { PrismaClient } from "@prisma/client";


export class DeleteSectorService{
    async execute(id: string) {

        const prismaClient = new PrismaClient();

        const sector = await prismaClient.sector.findUnique({ where: { id } });

        if (!sector) {
            throw new Error("Sector dont exists!");
        }

        const usersInTheSector = await prismaClient.sector.findMany({
            where: {
                id
            },
            include: {
                User: true
            }
        })

        const userQuantity = usersInTheSector[0].User.length

        if (userQuantity > 0) {

            const undefinedSector = await prismaClient.sector.findFirst({ where: { name: "undefined" } });

            usersInTheSector.map(async (user) => {
                console.log(user.User)
                await prismaClient.user.update({
                    where: {
                        id: user.User[0].id
                    },
                    data: {
                        sectorId: undefinedSector?.id
                    }
                })
            })
        }

        await prismaClient.sector.delete({
            where: {
                id
            }
        })

        return
    }
}