import { PrismaClient } from "@prisma/client";


export class DeleteSegmentService {
    async execute(id: string) {
        const prismaClient = new PrismaClient();

        /**
         * VERIFY IF SEGMENT EXISTS
         * IF EXISTS
         * RETURN A ERROR
         * ELSE
         * DELETE THIS SEGMENT
         */

        /**
         * VERIFY IF EXISTS
         */

        const segment_exists = await prismaClient.segment.findUnique({
            where: {
                id
            }
        })

        if(!segment_exists) {
            throw new Error("This doesnt segment exists!")
        }

        /**
         * DELETE THIS SEGMENTO OF THE DATABASE
         */

        await prismaClient.segment.delete({
            where: {
                id
            }
        })

        return

    }
}