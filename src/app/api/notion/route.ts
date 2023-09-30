const Client = require("@notionhq/client").Client;

import { NextResponse } from "next/server";

export async function GET() {
  const getNotionData = async () => {
    const notion = new Client({ auth: EnvConstants.NOTION_TOKEN });
    const notionData = await notion.databases.query({
      database_id: EnvConstants.NOTION_DATABASE_ID || "",
    });
    return notionData.results;
  };
  const response = await getNotionData();
  console.log(response);
  return NextResponse.json({ response });
}
