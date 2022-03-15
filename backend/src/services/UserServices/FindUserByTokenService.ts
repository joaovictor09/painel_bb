import { PrismaClient } from '@prisma/client';
import { decode } from 'jsonwebtoken';

export class FindUserByTokenService {
  async execute(token: string) {
    const prismaClient = new PrismaClient();

    const tokenDecoded = decode(token)
    const userId = tokenDecoded?.sub as string
    const user = await prismaClient.user.findUnique({
      where: {
        id: userId
      },
      select: {
        nickname: true,
        email: true,
      }
    })
    return user
  }
}