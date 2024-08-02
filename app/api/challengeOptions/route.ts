import { db } from "@/db/db";
import { challengeOptions } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isAdmin = () => {
  const { sessionClaims } = auth();

  if (sessionClaims?.metadata.role !== "admin") {
    return false;
  }
  return true;
};

export const GET = async () => {
  const data = await db.query.challengeOptions.findMany();

  return NextResponse.json(data);
};

export const POST = async (req: Request) => {
  if (!isAdmin()) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const body = await req.json();

  const data = await db
    .insert(challengeOptions)
    .values({ ...body })
    .returning();

  return NextResponse.json(data[0]);
};
