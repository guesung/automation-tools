const getNotionApi = require("./notion-bot");
const express = require("express");

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
