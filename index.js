const express = require("express");
const { UserRoutes } = require("./src/routes/UserRoutes");
const { db } = require("./src/config/connection");

// express setting
const app = express();
const port = 3000;

// app setting
app.use(express.json());

// routes handling
app.use("/user", UserRoutes);

db.authenticate()
  .then(() => {
    console.log("Database connected...");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => console.log("Error: " + err));
