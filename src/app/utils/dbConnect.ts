import mongoose from 'mongoose';

const dbConnect = async (): Promise<void> => {
    const dbUrl = process.env.NEXT_PUBLIC_DB_URL;

    if (!dbUrl) {
        throw new Error('Database URL is not defined in the environment variables.');
    }

    try {
        await mongoose.connect(dbUrl);
        console.log('Database connected successfully.');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error; // Re-throw for handling elsewhere
    }
};

export default dbConnect;
