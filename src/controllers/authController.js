"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
// Mock data
const users = [
    { username: 'user1', password: 'password1' },
    // more mock data...
];
const register = (req, res) => {
    // User registration logic
    res.send('User registered');
};
exports.register = register;
const login = (req, res) => {
    // User login logic
    res.json({ token: 'JWT token' });
};
exports.login = login;
