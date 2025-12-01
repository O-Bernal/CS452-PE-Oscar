// backend/db/conn.mjs
import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.ATLAS_URI;
if (!uri) {
  throw new Error("ATLAS_URI is not defined in .env");
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;

export async function connectToServer() {
  await client.connect();
  db = client.db("recipe_finder_db");
  console.log("Connected to MongoDB Atlas");
}

export function getDb() {
  if (!db) {
    throw new Error("Database connection not initialized");
  }
  return db;
}
