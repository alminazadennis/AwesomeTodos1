const { MongoClient } = require("mongodb");
require('dotenv').config();


let client;

const connectToMongoDB = async () => {
    if (!client) {
        try {
            
            client = new MongoClient(uri); 
            
      
            await client.connect();
            
            console.log("Connected to MongoDB successfully!");
        } catch (error) {
            console.log("Database connection error:", error);
          
            throw error; 
        }
    }
    return client;
};

const getConnectedClient = () => client;

module.exports = { connectToMongoDB, getConnectedClient };