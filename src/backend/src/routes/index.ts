import { Router } from 'express';

import TeachersController from '../controllers/TeachersController';
import StudentController from '../controllers/StudentController';
import SessionsController from '../controllers/SessionsController';

const teachersController = new TeachersController();
const studentsController = new StudentController();
const sessionsController = new SessionsController();

const routes = Router();

routes.post('/teachers', teachersController.create);
routes.get('/teachers', teachersController.index);
routes.get('/teachers/:id', teachersController.show);
routes.put('/teachers/:id', teachersController.edit);

routes.post('/students', studentsController.create);
routes.get('/students/:id', studentsController.show);

routes.post('/sessions', sessionsController.authenticate);

export default routes;