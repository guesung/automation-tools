const Client = require("@notionhq/client").Client;

import { NextResponse } from "next/server";

export async function GET() {
  const getNotionData = async () => {
    const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_TOKEN });
    const notionData = await notion.databases.query({
      database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID || "",
    });
    return notionData.results;
  };
  const response = await getNotionData();
  console.log(response);
  return NextResponse.json({ response });
}
