import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface iPayLoad {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    //Receber o token

    const authToken = request.headers.authorization

    //Validar se token está preenchido

    if(!authToken){
        return response.status(401).end();
    }

    const [bearer, token] = authToken.split(" ")

    if(!bearer || !token){
        return response.status(401).end();
    }

    if (bearer !== "Bearer") {
        return response.status(401).end();
    }

    try {
        const { sub } = verify(token, "f322f6a543864b2cd1ba70f675236946") as iPayLoad;

        request.userId = sub;
        
        return next()
    } catch(err) {
        return response.status(401).end()
    }

}