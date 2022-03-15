import { PrismaClient } from "@prisma/client"


export class DeleteClientPlanService {

    async execute (id: string) {

        const prismaClient = new PrismaClient()

        /**
         * VERIFY IF THIS PLAN EXISTS
         * IF EXIST
         * DELETE IT
         * ELSE
         * RETURN A ERROR
         */

        const plan = await prismaClient.clientPlan.findUnique({
            where: {
                id
            }
        })
         
        if (!plan) {
            throw new Error("This plan dont exists!")
        }

        await prismaClient.clientPlan.delete({
            where: {
                id
            }
        })

        return
    }

}