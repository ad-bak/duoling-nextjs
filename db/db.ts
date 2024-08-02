import postgres from "postgres";
import * as schema from "./schema";
import { drizzle } from "drizzle-orm/postgres-js";

const client = postgres(process.env.DATABASE_URL as string);
export const db = drizzle(client, { schema, logger: true });

export async function closeDbConnection() {
  console.log("Attempting to close database connection...");
  try {
    await client.end();
    console.log("Database connection closed successfully");
  } catch (error) {
    console.error("Error while closing database connection:", error);
  }
}

function setupShutdownHandlers() {
  console.log("Setting up shutdown handlers");

  async function handleShutdown(signal: string) {
    console.log(`${signal} received. Closing db connection and exiting.`);
    await closeDbConnection();
    process.exit(0);
  }

  process.on("SIGTERM", () => handleShutdown("SIGTERM"));
  process.on("SIGINT", () => handleShutdown("SIGINT"));

  console.log("Shutdown handlers set up successfully");
}

setupShutdownHandlers();
