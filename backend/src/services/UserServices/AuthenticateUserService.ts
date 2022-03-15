import { PrismaClient } from '@prisma/client';
import { compare } from 'bcryptjs';
import { sign } from "jsonwebtoken";


interface IAuthenticateRequest {
    email: string;
    password: string;
}

export class AuthenticateUserService {

    async execute({email, password}: IAuthenticateRequest){
        const prismaClient = new PrismaClient()

        //VERIFY IF EMAIL EXISTS

        const user = await prismaClient.user.findUnique({
            where: {
                email
            }
        })

        if (!user) {
            throw new Error("Email/Password incorrect")
        }
        
        //VERIFY IF THE PASSWORD IS INCORRECT

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect")
        }

        //GENERATE THE TOKEN
        
        const token = sign({
            email: user.email
        }, "f322f6a543864b2cd1ba70f675236946", {
            subject: user.id,
            expiresIn: '1d'
        });

        const userData = {
            'name': user.nickname,
            'email': user.email,
        }

        //RETURN

        return { token, userData};


    }

}