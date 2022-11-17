import { z } from 'zod';

export const User = z
    .object({
        username: z.string().min(4),
        email: z.string().email(),
        password: z.string().length(5),
    })
    .strict();

export const Role = z
    .object({
        username: z.string().min(4),
        role: z.enum(['USER', 'ADMIN']),
    })
    .strict();

export const DeleteUser = z
    .object({
        username: z.string().min(4),
    })
    .strict();
