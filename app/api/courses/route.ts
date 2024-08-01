import { db } from "@/db/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  const data = await db.query.courses.findMany();

  return NextResponse.json(data);
};
