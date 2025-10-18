import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email({ message: 'Email inválido' }),
  password: z.string().min(6, 'Senha mínima 6 caracteres'),
});

export const registerSchema = z.object({
  name: z.string().min(2, 'Nome mínimo 2 caracteres'),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha mínima 6 caracteres'),
  avatarUrl: z.string().url('URL inválida').optional(),
});
