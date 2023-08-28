import { NextResponse } from "next/server";
import ssx from "../../../pages/_ssx";

export async function POST(request: Request) {
  return NextResponse.json(
    {
      success: await ssx.logout() ?? true
    },
    {
      status: 200
    }
  );
}