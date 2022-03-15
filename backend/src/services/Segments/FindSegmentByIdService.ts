import { PrismaClient } from '@prisma/client';

export class FindSegmentByIdService {
  async execute(id: string) {

    const prismaClient = new PrismaClient();

    /**
     * FIND SEGMENTS
     * IF DOESNT EXISTS
     * RETURN A ERROR
     * ELSE
     * RETURN THE SEGMENT 
     * AND ALL CLIENTS WITH THIS SEGMENT
     */

    const segment = await prismaClient.segment.findFirst({
      where: {
        id
      },
      select: {
        name: true,
        Client: {
          select: {
            id: true,
            company_name: true
          }
        }
      }
    });

    if(!segment) {
      throw new Error("This segment doest exists!");
    }

    return segment
  }
}