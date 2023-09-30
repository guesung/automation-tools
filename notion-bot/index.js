const dotenv = require('dotenv')
const express = require("express");
const Client = require("@notionhq/client").Client;
dotenv.config()

const notion = new Client({ auth: process.env.NOTION_TOKEN });

const getNotionApi = async () => {
  const notionData = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });
  console.log(notionData.results);
  return notionData.results;
};

const app = express();
app.set("port", 8001);

app.use("/", async (req, res) => {
  try {
    const notionData = await getNotionApi();
    res.send(notionData);
  } catch (err) {
    console.error(err);
  }
});

app.listen(app.get("port"), () => {
  console.log("Notion API 서버 실행");
});
