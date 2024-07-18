import { cache } from "react";
import { db } from "./db";

export const getCourses = cache(async () => {
  return await db.query.courses.findMany();
});
