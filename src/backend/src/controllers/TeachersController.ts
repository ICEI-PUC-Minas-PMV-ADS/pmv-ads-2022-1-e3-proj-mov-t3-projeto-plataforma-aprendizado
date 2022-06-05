import { Request, Response } from 'express';
import knex from '../database/connection';

export default class TeachersController {
    public async create(req: Request, res: Response) {
        const { 
            name,
            lastname,
            email,
            password,
            class_types,
            about_class,
            about_me,
            price,
            phone,
            picture_url,
        } = req.body;

        const findEmail = await knex('teachers')
            .where('email', email)
            .select();
        
        if (findEmail.length > 0) {
            return res.status(400).json({ error: 'Email already registered' });
        }

        const teacher = {
            name,
            lastname,
            email,
            password,
            class_types,
            about_class,
            about_me,
            price,
            phone,
            picture_url,
        }

        const teacherResponse = await knex('teachers').insert(teacher);

        let teacherId;

        if (teacherResponse.length > 0) {
            teacherId = teacherResponse[0];
        }

        return res.json({ id: teacherId, ...teacher});
    }
    
    public async index(req: Request, res: Response) {
        const { class_types } = req.query;
        
        let teachers;

        if (class_types) {
            teachers = await knex('teachers')
                .where('class_types', class_types as string)
                .select();
        } else {
            teachers = await knex('teachers').select();
        }

        return res.json(teachers);
    }
    
    public async show(req: Request, res: Response) {
        const { id } = req.params;
        
        const teacher = await knex('teachers').where('id', id).select().first();
        
        return res.json(teacher);
    }
    
    public async edit(req: Request, res: Response) {
        const { id } = req.params;

        const { 
            name,
            lastname,
            email,
            password,
            class_types,
            about_class,
            about_me,
            price,
            phone,
            picture_url,
        } = req.body;
        
        const teacher = {
            name,
            lastname,
            email,
            password,
            class_types,
            about_class,
            about_me,
            price,
            phone,
            picture_url,
        }

        await knex('teachers')
            .where('id', id)
            .update(teacher);
    
        return res.json({ id, ...teacher});
    }
}