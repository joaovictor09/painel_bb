import { PrismaClient } from "@prisma/client";

interface ISegment{
    id: string;
    name: string;
}

export class UpdateSegmentService {
    async execute({id, name}: ISegment) {

        const prismaClient = new PrismaClient()

        /**
         * VERIFY IF THIS SEGMENT EXIST
         * IF DONT EXISTS
         * RETURN A ERROR
         * IF EXISTS
         * UPDATE
         */

        const segment_exist = await prismaClient.segment.findUnique({
            where: {
                id
            }
        })

        if (!segment_exist) {
            throw new Error("This segment dont exists!")
        }

        const segment = prismaClient.segment.update({
            where: {
                id
            },
            data: {
                name
            }
        })

        return segment
    }
}