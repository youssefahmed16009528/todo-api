// index.js

// Import the Express library we just installed
const express = require('express');

// Create an "app" — this represents our web server
const app = express();

// Tell Express to automatically parse incoming JSON request bodies
// Without this, req.body would be undefined when someone sends JSON data
app.use(express.json());

// Our "database" — just an array living in memory (resets when server restarts)
let todos = [];
let nextId = 1; // simple counter to give each todo a unique id

// ROUTE 1: Get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// ROUTE 2: Get a single todo by id
app.get('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  res.json(todo);
});

// ROUTE 3: Create a new todo
app.post('/todos', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const newTodo = {
    id: nextId++,
    title,
    completed: false
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// ROUTE 4: Update a todo
app.put('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  const { title, completed } = req.body;
  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;
  res.json(todo);
});

// ROUTE 5: Delete a todo
app.delete('/todos/:id', (req, res) => {
  const index = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  todos.splice(index, 1);
  res.status(204).send();
});

// Start the server, listening on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Todo API running on http://localhost:${PORT}`);
});