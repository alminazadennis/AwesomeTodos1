const { getConnectedClient } = require("../database");

const getCollection = () => {
  const client = getConnectedClient();
  
  // Check if client exist
  if (!client) {
    throw new Error("MongoDB client is not connected yet!");
  }
  
  const collection = client.db("todosdb").collection("todos");
  return collection;
};

module.exports = { getCollection };