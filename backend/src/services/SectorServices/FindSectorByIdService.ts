import { PrismaClient } from "@prisma/client";


export class FindSectorByIdService{
    async execute(id: string){
        
        const prismaClient = new PrismaClient()

        const sector = await prismaClient.sector.findUnique({
            where: {
                id
            },
            include: {
                User: {
                    select: {
                        id:true,
                        name: true
                    }
                }
            }
        })

        if(!sector) {
            throw new Error("Sector dont exists!")
        }

        return sector

    }
}