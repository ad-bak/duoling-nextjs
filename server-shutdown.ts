import { closeDbConnection } from "./db/db";

console.log("Setting up shutdown handlers");

process.on("SIGTERM", async () => {
  console.log("SIGTERM received. Closing db connection and exiting.");
  try {
    await closeDbConnection();
    console.log("Database connection closed successfully");
  } catch (error) {
    console.error("Error closing database connection:", error);
  }
  process.exit(0);
});

process.on("SIGINT", async () => {
  console.log("SIGINT received. Closing db connection and exiting.");
  try {
    await closeDbConnection();
    console.log("Database connection closed successfully");
  } catch (error) {
    console.error("Error closing database connection:", error);
  }
  process.exit(0);
});

console.log("Shutdown handlers set up successfully");
