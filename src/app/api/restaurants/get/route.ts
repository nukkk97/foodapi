import { db } from "@/db";
import { restaurantsTable } from "@/db/schema";
import { sql } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function GET() {
  const timestamp = new Date().getTime();
  const respose = await db
    .select({
      name: restaurantsTable.name,
      address: restaurantsTable.address,
    })
    .from(restaurantsTable)
    .orderBy(sql`RANDOM()*${timestamp}`)
    .limit(1)
    .execute();
  return NextResponse.json({
    restaurant: respose[0]
  })
}