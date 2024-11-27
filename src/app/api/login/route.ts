import { NextResponse, NextRequest } from "next/server";
import { getDocumentById, getPassword, getUserByEmail } from "@/services/mongo";
import { login } from '@/services/bcrypt'


export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json();

        if (!email) {
            return NextResponse.json({ message: 'Email not provided' }, { status: 400 });
        }

        const user = await getUserByEmail(email);
        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        const userId = user._id.toString();        

        const passwordObj = await getPassword(userId);
        if (!passwordObj) {
            return NextResponse.json({ message: 'Password not found' }, { status: 404 });
        }

        const storedHashedPassword = passwordObj.password;
        
        const token = await login(password, storedHashedPassword, userId);

        // Return the token on successful login
        return NextResponse.json({ token: token });

    } catch (error : any) {
        console.error('Error during POST request:', error);  // Log the error for debugging
        return NextResponse.json({ message: 'Error processing login', error: error.message || error }, { status: 500 });
    }
}
