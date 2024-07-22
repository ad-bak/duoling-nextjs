import "dotenv/config";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "../db/schema";

const client = postgres(process.env.DATABASE_URL!);

const db = drizzle(client, { schema });

const main = async () => {
  try {
    console.log("Seeding the database...");

    await db.delete(schema.userProgress);
    await db.delete(schema.courses);
    console.log("Deleted all records");

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Spanish",
        imageSrc: "/es.svg",
      },
      {
        id: 2,
        title: "French",
        imageSrc: "/fr.svg",
      },
      {
        id: 3,
        title: "Japanese",
        imageSrc: "/jp.svg",
      },
      {
        id: 4,
        title: "Croatian",
        imageSrc: "/hr.svg",
      },
    ]);

    console.log("Seeding completed successfully");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  } finally {
    await client.end();
  }
};

main();
