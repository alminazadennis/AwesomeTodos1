const { getConnectedClient } = require("../database");

const getCollection = () => {
  const client = getConnectedClient();
  
  // Check if client exists to prevent the "undefined" error
  if (!client) {
    throw new Error("MongoDB client is not connected yet!");
  }
  
  const collection = client.db("todosdb").collection("todos");
  return collection;
};

module.exports = { getCollection };