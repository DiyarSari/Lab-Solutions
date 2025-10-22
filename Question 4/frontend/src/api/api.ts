import axios from 'axios';
import { User } from './User';

const API_URL = 'http://localhost:8080/api';

export const api = {
    getAllUsers: async (): Promise<User[]> => {
        const response = await axios.get(`${API_URL}/users`);
        return response.data;
    },

    getUser: async (id: number): Promise<User> => {
        const response = await axios.get(`${API_URL}/users/${id}`);
        return response.data;
    },

    createUser: async (user: User): Promise<User> => {
        const response = await axios.post(`${API_URL}/users`, user);
        return response.data;
    },

    updateUser: async (id: number, user: User): Promise<User> => {
        const response = await axios.put(`${API_URL}/users/${id}`, user);
        return response.data;
    },

    deleteUser: async (id: number): Promise<void> => {
        await axios.delete(`${API_URL}/users/${id}`);
    }
}; 