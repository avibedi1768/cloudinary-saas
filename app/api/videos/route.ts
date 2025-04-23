// use prisma client to have a connection. and then fetch data (find many) from the database and use it

import { NextRequest, NextResponse } from "next/server"; //named import
import { PrismaClient } from "../../generated/prisma"; //named import
const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const videos = await prisma.video.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(videos);
  } catch (error) {
    return NextResponse.json(
      { error: "error fetching videos" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
