import express from 'express';
import { IUser } from '../../interfaces/IUser';

function userRoutes(app: express.Application) {

    app.get('/usuarios', (req, res) => {
        res.send('Get all users');
    });

    app.post("/usuarios" , (req , res) => {
        const resultado = IUser.safeParse(req.body);

        if(!resultado.success){
            res.send(resultado.error.flatten());
        }
        else{

        }
    })

}

export default userRoutes;