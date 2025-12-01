// backend/routes/recipes.mjs
import express from "express";
import { ObjectId } from "mongodb";
import { getDb } from "../db/conn.mjs";

const router = express.Router();

// GET /recipes -> list all recipes
router.get("/", async (req, res) => {
  try {
    const db = getDb();
    const recipes = await db.collection("recipes").find({}).toArray();
    res.json(recipes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching recipes" });
  }
});

// GET /recipes/:id -> single recipe
router.get("/:id", async (req, res) => {
  try {
    const db = getDb();
    const recipe = await db
      .collection("recipes")
      .findOne({ _id: new ObjectId(req.params.id) });

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.json(recipe);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching recipe" });
  }
});

// POST /recipes -> create
router.post("/", async (req, res) => {
  try {
    const db = getDb();
    const { name, ingredients, instructions, notes } = req.body;

    const newRecipe = {
      name,
      ingredients,
      instructions,
      notes: notes || "",
      createdAt: new Date(),
    };

    const result = await db.collection("recipes").insertOne(newRecipe);
    res.status(201).json({ ...newRecipe, _id: result.insertedId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating recipe" });
  }
});

// PUT /recipes/:id -> update
router.put("/:id", async (req, res) => {
  try {
    const db = getDb();
    const { name, ingredients, instructions, notes } = req.body;

    const updateDoc = {
      $set: { name, ingredients, instructions, notes },
    };

    const result = await db
      .collection("recipes")
      .updateOne({ _id: new ObjectId(req.params.id) }, updateDoc);

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.json({ message: "Recipe updated" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating recipe" });
  }
});

// DELETE /recipes/:id -> delete
router.delete("/:id", async (req, res) => {
  try {
    const db = getDb();
    const result = await db
      .collection("recipes")
      .deleteOne({ _id: new ObjectId(req.params.id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.json({ message: "Recipe deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error deleting recipe" });
  }
});

export default router;
