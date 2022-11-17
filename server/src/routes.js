import express from 'express';
import { createUser, deleteUser, listUsers, setRole } from './controllers/users.js';

const routes = express();

routes.get('/', listUsers);
routes.post('/', createUser);
routes.put('/', setRole);
routes.delete('/', deleteUser);

export default routes;
