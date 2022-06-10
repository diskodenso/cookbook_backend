// import dotenv
import "dotenv/config.js";
// import express
import express from "express";
// declare express
const app = express();
// declare port
const port = process.env.PORT || 5000

// call middlesware on app
app.use(express.json());
app.use("/api/recipes", recipesRouter);

// API Documentation
app.get("/", (req, res) => {
  res.send("<h1>Our awesome Cookbook</h1>");
});

// call listener function
app.listen(port, () => console.log(`Server is running on Port ${port}`));