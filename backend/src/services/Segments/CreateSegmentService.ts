import { PrismaClient } from "@prisma/client";


export class CreateSegmentService {
    async execute(name: string) {

        const prismaClient = new PrismaClient()

        /**
         * VERIFY IF THIS SEGMENTS EXISTS
         * IF EXISTS
         * RETURN A ERROR
         * ELSE
         * CREATE THIS SEGMENT IN DATABASE
         */

        /**
         * VERIFY IF EXISTS
         */

        const segment_exists = await prismaClient.segment.findUnique({
            where: {
                name
            }
        })

        if(segment_exists) {
            throw new Error("This segment exists!")
        }

        /**
         * CREATE IN DATABASE
         */

        const segment = await prismaClient.segment.create({
            data: {
                name
            }
        })

        return segment

    }
}