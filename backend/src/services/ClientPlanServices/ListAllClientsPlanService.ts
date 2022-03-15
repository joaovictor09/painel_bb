import { PrismaClient } from "@prisma/client"


export class ListAllClientsPlanService {
    async execute() {

        const prismaClient = new PrismaClient()

        const plans = await prismaClient.clientPlan.findMany()

        return plans
    }
}