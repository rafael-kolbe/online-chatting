import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import { ZodError } from 'zod';
import { User, Role, DeleteUser } from '../validations/user.js';
import bcrypt from 'bcrypt';

export const listUsers = async (req, res) => {
    const users = await prisma.user.findMany();

    return res.json(users);
};

export const createUser = async (req, res) => {
    try {
        const user = User.parse({ ...req.body });
        const hashedUserPassword = await bcrypt.hash(user.password, 10);

        await prisma.user.create({
            data: {
                username: user.username,
                email: user.email,
                password: hashedUserPassword,
            },
        });

        return res.status(201).json({ message: 'User created.' });
    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json(error.errors.map(err => `${err.path}: ${err.message}`));
        }

        return res.status(400).json({ message: 'Username or Email already exists.' });
    }
};

export const setRole = async (req, res) => {
    try {
        const role = Role.parse({ ...req.body });

        await prisma.user.update({
            where: {
                username: role.username,
            },
            data: {
                userRole: role.role,
            },
        });

        return res.json({ message: `User ${role.username} updated role to ${role.role}.` });
    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json(error.errors.map(err => `${err.path}: ${err.message}`));
        }

        return res.status(404).json({ message: 'User not found.' });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const deleteUser = DeleteUser.parse({ ...req.body });

        await prisma.user.delete({
            where: {
                username: deleteUser.username,
            },
        });

        return res.status(200).json({ message: `User ${deleteUser.username} was deleted.` });
    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json(error.errors.map(err => `${err.path}: ${err.message}`));
        }

        return res.status(404).json({ message: 'User not found.' });
    }
};
