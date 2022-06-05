import { Request, Response } from 'express';
import knex from '../database/connection';

export default class SessionsController {
    public async authenticate(req: Request, res: Response) {
        const { email, password, type_account } = req.body;

        const user = await knex(type_account === 'teacher' ? 'teachers' : 'students')
            .where('email', email)
            .where('password', password)
            .select()
            .first();

        if (user) {
            return res.status(200).json(user);
        }else {
            return res.status(401).json({ error: 'Incorrect credentials' });
        }
    }
}