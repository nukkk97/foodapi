import { db } from "@/db";
import { restaurantsTable } from "@/db/schema";
import { sql } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const respose = await db
    .select({
      name: restaurantsTable.name,
      address: restaurantsTable.address,
    })
    .from(restaurantsTable)
    .orderBy(sql`RANDOM()`)
    .limit(1)
    .execute();
  return NextResponse.json({
    restaurant: respose[0]
  })
}