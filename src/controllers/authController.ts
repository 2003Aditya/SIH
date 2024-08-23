import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Mock data
const users = [
  { username: 'user1', password: 'password1' },
  // more mock data...
];

export const register = (req: Request, res: Response) => {
  // User registration logic
  res.send('User registered');
};

export const login = (req: Request, res: Response) => {
  // User login logic
  res.json({ token: 'JWT token' });
};

