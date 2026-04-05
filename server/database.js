const { MongoClient } = require("mongodb");
require('dotenv').config();

const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";

let client;

const connectToMongoDB = async () => {
    if (!client) {
        try {
            // REMOVED: { useUnifiedTopology: true }
            client = await MongoClient.connect(uri); 
            console.log("Connected to Local MongoDB successfully!");
        } catch (error) {
            console.log("Database connection error:", error);
        }
    }
    return client;
};

const getConnectedClient = () => client;

module.exports = { connectToMongoDB, getConnectedClient };