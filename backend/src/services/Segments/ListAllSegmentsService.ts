import { PrismaClient } from '@prisma/client';

export class ListAllSegmentsService {
  async execute() {

    const prismaClient = new PrismaClient();
    const segments = await prismaClient.segment.findMany()

    return segments 
  }
}