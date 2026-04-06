


const express = require("express");
const cors = requier("cors");
const { connectToMongoDB } = require("./database");
const router = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

const port = 5000;


async function startServer() {
  try {
    await connectToMongoDB(); 
   const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
  } catch (err) {
    console.error("Failed to start server:", err);
  }
}

startServer();