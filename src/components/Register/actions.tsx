// pages/api/registerUser.ts
'use server';

import Users from "@/service/Users";

interface UserData {
    username: string;
    fullName: string;
    email: string;
    city: string;
    weekDays: string;
}

export default async function registerUser(userData: UserData) {
    try {
        const response = await Users.createUser(userData);
        return response;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
}
