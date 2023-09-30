import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: NextRequest) {
  const { text } = await request.json();
  const response = await axios.post(
    `https://hooks.slack.com/services/${process.env.NEXT_PUBLIC_SLACK_TOKEN}`,
    {
      text,
    }
  );
  return NextResponse.json({ response: "성공" });
}
