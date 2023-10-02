const axios = require("axios");
const schedule = require("node-schedule");
const app = require("express")();

const SCHEDULE_PORT = 8000;

app.listen(SCHEDULE_PORT, () => {
  const job = schedule.scheduleJob({ second: 0 }, function () {
    axios.post(`https://automation-tools-nu.vercel.app/api/slack`, {
      text: "안녕하세요 -!",
    });
  });
});
