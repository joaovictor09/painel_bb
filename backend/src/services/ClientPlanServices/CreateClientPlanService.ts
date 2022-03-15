import { PrismaClient } from "@prisma/client";

interface IPlan {
    plan_type: string;
    plan_service: string;
}

export class CreateClientPlanService {
    async execute({plan_type, plan_service}: IPlan) {

        const prismaClient = new PrismaClient()

        /**
         * CREATE PLAN NAME (GOOGLE ADS - PRATA)
         */

        const plan_type_column = await prismaClient.planType.findFirst({
            where: {
                plan: plan_type
            }
        })

        if (!plan_type_column){
            throw new Error("This Plan Type dont exists")
        }

        const plan_service_column = await prismaClient.planService.findFirst({
            where: {
                service: plan_service
            }
        })

        if (!plan_service_column){
            throw new Error("This Plan Service dont exists")
        }

        const plan_name = `${plan_service} - ${plan_type}`        

        /**
         * VERIFY IF PLAN NAME EXISTIS IN DATABASE
         */

        const plan_exists = await prismaClient.clientPlan.findFirst({
            where: {
                name: plan_name
            }
        })

        if (plan_exists) {
            throw new Error("This plan exist")
        }

        /**
         * CREATE NEW PLAN IN DATABASE
         */

        const plan_service_id = await prismaClient.planService.findFirst({
            where: {

            }
        })

        const plan = await prismaClient.clientPlan.create({
            data: {
                name: plan_name,
                plan_service: plan_service_column.id,
                plan_type: plan_type_column.id
            }
        })


        return plan
    }
}