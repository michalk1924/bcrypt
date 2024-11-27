import { http } from './http';

const authService = {
    async login(email: string, password: string): Promise<string | null> {
        try {
            const response = await http.post('/login', { email, password });
            if (response.data && response.data.token) {
                return response.data.token;
            }
            return null;
        } catch (error) {
            console.error('Login error:', error);
            return null;
        }
    },

    async signup(email: string, password: string): Promise<string | null> {
        try {
            const response = await http.post('/signup', { email, password });
            if (response.data && response.data.token) {
                return response.data.token;
            }
            return null;
        } catch (error) {
            console.error('Signup error:', error);
            return null;
        }
    },
}

export default authService;
