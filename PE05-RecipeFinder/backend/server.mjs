// backend/server.mjs
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectToServer } from "./db/conn.mjs";
import recipeRoutes from "./routes/recipes.mjs";

dotenv.config();

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/recipes", recipeRoutes);

app.get("/", (req, res) => {
  res.send("Recipe Finder API is running");
});

connectToServer()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  });
