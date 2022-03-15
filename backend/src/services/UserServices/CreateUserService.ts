import { prismaClient } from "../../database/prismaClient";
import { hash } from 'bcryptjs'

interface IUser {
    name: string;
    email: string;
    password: string;
    admin: boolean;
    celphone?: string;
    nickname?: string;
    sectorId: string;
}

export class CreateUserService{

    async execute({name, email, password, admin, celphone, nickname, sectorId}: IUser){

        //VERIFY IF USER EXISTS

        const userExists = await prismaClient.user.findFirst({
            where: {
                email
            }
        })

        if (userExists) {
            throw new Error("User Exists!")
        }

        //VERIFY IF THE SECTOR EXISTS

        if(!sectorId){
            throw new Error("Please, insert a sector")
        }

        /**
         * MAKE THE NICKNAME VERIFICATION
         * IF IS EMPTY
         * PUT THE NICKNAME = NAME
         */

        if (!nickname) {
            nickname = name
        }

        /**
         * GENERATING THE HASH FOR STORE THE PASSWORD
         */

        const passwordHash = await hash(password, 8)

        /**
         * STORE USER IN THE DATABASE AND RETURN
         */

        const user = await prismaClient.user.create({
            data: {
                email,
                password: passwordHash,
                name,
                nickname,
                admin,
                celphone,
                sectorId
            },
            
        });

        return user;

    }

}