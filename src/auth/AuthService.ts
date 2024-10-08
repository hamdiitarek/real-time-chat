// src/auth/authService.ts

import axios from 'axios';

// Define the base API URL for authentication requests
const API_URL = 'http://localhost:5100/api';

// Define TypeScript interfaces for function parameters and return values
interface UserData {
  username: string;
  firstName: string; // Add firstName
  lastName: string;  // Add lastName
  password: string;
  email?: string; // Optional email field, useful for registration
}

interface AuthResponse {
  token?: string;
  message?: string;
  error?: string;
}

/**
 * Register a new user.
 * @param userData - The user data containing username, password, and optionally email.
 * @returns A promise resolving to an AuthResponse object.
 */
export const register = async (userData: UserData): Promise<AuthResponse> => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data as AuthResponse; // Type assertion for the response data
  } catch (error: any) {
    console.error("Registration error:", error);
    return { error: "Registration failed. Please try again." };
  }
};

/**
 * Login an existing user.
 * @param userData - The user data containing username and password.
 * @returns A promise resolving to an AuthResponse object.
 */
export const login = async (userData: UserData): Promise<AuthResponse> => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data as AuthResponse; // Type assertion for the response data
  } catch (error: any) {
    console.error("Login error:", error);
    return { error: "Login failed. Please try again." };
  }
};
