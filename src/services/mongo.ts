import { MongoClient, ObjectId } from "mongodb";

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

let cachedClient: MongoClient;

export async function getDatabaseClient() {
    if (!cachedClient) {
        cachedClient = await connectDatabase();
    }
    return cachedClient;
}

export async function connectDatabase() {
    const dbConnection: any = process.env.PUBLIC_DB_CONNECTION;
    const client = await MongoClient.connect(dbConnection);
    return client;
}

export async function getDocumentById(collection: string, id: string) {
    try {
        const client = await getDatabaseClient();
        const db = await client.db('bcrypt');
        const document = await db.collection(collection).findOne({ _id: new ObjectId(id) });
        return document;
    }
    catch (error) {
        console.error('Error getting document by ID:', error);
        return null;
    }
}

export async function insertDocument(collection: string, document: object) {
    try {
        const client = await getDatabaseClient();
        const db = await client.db('bcrypt');
        const result = await db.collection(collection).insertOne(document);
        return result;
    }
    catch (error: any) {
        console.error('Error inserting document:', error?.message);
        throw error;
    }

}

export async function getUserByEmail(email: string) {
    try {
        const client = await getDatabaseClient();
        const db = await client.db('bcrypt');
        const user = await db.collection('users').findOne({ email: email });
        return user;
    }
    catch (error) {
        console.error('Error getting user by email:', error);
        return null;
    }
}

export async function getPassword(user_id: string) {
    try {
        const client = await getDatabaseClient();
        const db = await client.db('bcrypt');
        const user = await db.collection('passwords').findOne({ user_id: user_id });
        return user;
    }
    catch (error) {
        console.error('Error getting user by email:', error);
        return null;
    }
}

connectDatabase();