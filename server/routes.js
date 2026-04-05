const express = require("express");
const router = express.Router();
const { getCollection } = require("./models/index");
const { ObjectId } = require("mongodb");

// GET /api/todos - Retrieve all todos
router.get("/todos", async (req, res) => {
    const collection = getCollection();
    const todos = await collection.find({}).toArray();
    res.status(200).json(todos);
});

// POST /api/todos - Create a new todo
    router.post("/todos", async (req, res) => {
    const collection = getCollection();
    let { todo } = req.body;

    todo = JSON.stringify(todo);
  
    const newTodo = await collection.insertOne({ todo, status: false });
  
    res.status(201).json({ todo, status: false, _id: newTodo.insertedId });
  })

// DELETE /api/todos/:id - Delete a specific todo
router.delete("/todos/:id", async (req, res) => {
    const collection = getCollection();
    const _id = new ObjectId(req.params.id);
  
    const deletedTodo = await collection.deleteOne({ _id });
    res.status(200).json(deletedTodo);
});

// 
// PUT /todos/:id
// PUT /todos/:id
router.put("/todos/:id", async (req, res) => {
    const collection = getCollection();
    const _id = new ObjectId(req.params.id);
    
    // Extract both todo text and status from the request body
    const { todo, status } = req.body; 

    // Validation check for status type
    if (typeof status !== "boolean") {
        return res.status(400).json({ mssg: "invalid status" });
    }
  
    // Updates the text and flips the status in one go
    const updatedTodo = await collection.updateOne(
        { _id }, 
        { $set: { todo, status: !status } } 
    );
    
    res.status(200).json(updatedTodo);
});
module.exports = router;