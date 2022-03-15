import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";


export async function ensureAdmin(request: Request, response:Response, next: NextFunction) {

    const { userId } = request;

    //Verificar se usuário é admin

    const prismaClient = new PrismaClient();

    const user = await prismaClient.user.findFirst({
        where: {
            id: userId,
        }
    });

    const admin = user?.admin

    if (admin) {
        return next()
    }

    return response.status(401).json({
        error: "Unauthorized",
    })
}