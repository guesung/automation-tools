const dotenv = require('dotenv')
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

module.exports = getNotionApi