import { NextFunction, Request, Response } from "express";

const jwt = require('jsonwebtoken');
const config = require('../../shared/auth/auth');
const { promisify } = require('util')

module.exports = async (req: Request, res: Response, next: NextFunction) => {
    const auth = req.headers.authorization;

    if (!auth) {
        return res.status(401).json({
            error: true,
            code: 130,
            message: 'O token de autenticação não existe.'
        })
    }

    const [, token ] = auth.split(' ')

    try {
        //Retorna um boleam dizendo se o token está decodificado ou não.
        const decoded = await promisify(jwt.verify)(token, config.secret);

        if (!decoded) {
            return res.status(401).json({
                error: true,
                code: 130,
                message: 'O token expirou.'
            })
        //Se correr tudo bem ele permite o acesso    
        } else {
            req.user_id = decoded.id;
            next();
        }
    //Se o token for inválido 
    } catch {
        return res.status(401).json({
            error: true,
            code: 130,
            message: 'Token Inválido.'
        })
    }

}