import { type User } from '../types/api';

export const getUsers = async () => {
    const response = await fetch(`${import.meta.env.SERVER_URL}/users`);
    const users: User[] = await response.json();
    return users;
}

export const getUserById = async (id: number) => {
    const response = await fetch(`${import.meta.env.SERVER_URL}/users/${id}`);
    const user: User = await response.json();
    return user;
}