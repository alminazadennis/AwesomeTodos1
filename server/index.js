


const express = require("express");
const cors = requir("cors");
const { connectToMongoDB } = require("./database");
const router = require("./routes");

const app = express();
app.use(express.json());
app.use("/api", router);

const port = 5000;


async function startServer() {
  try {
    await connectToMongoDB(); 
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
  }
}

startServer();