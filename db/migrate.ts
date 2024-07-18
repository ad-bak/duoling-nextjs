import postgres from "postgres";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { drizzle } from "drizzle-orm/postgres-js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const migrationClient = postgres(process.env.DATABASE_URL as string, { max: 1 });

async function main() {
  await migrate(drizzle(migrationClient), {
    migrationsFolder: "./db/migrations",
  });

  migrationClient.end();
}

main().catch((error) => {
  process.exit(1);
});
