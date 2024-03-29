import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URL!);
        
        const connection = mongoose.connection;
        
        connection.on('connected', () => {
            console.log("MongoDB connected successfully");
        });

        connection.on('error', (err) => {
            console.error("MongoDB connection error:", err);
        });

        return connection; // Return the connection object
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error; // Re-throw the error to allow callers to handle it
    } 
}
