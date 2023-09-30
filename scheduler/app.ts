//app.js
const axios = require("axios");
const schedule = require("node-schedule");
const app = require("express")();

const SCHEDULE_PORT = 8000;

app.listen(SCHEDULE_PORT, () => {
  //매 5분마다 수행!
  const job = schedule.scheduleJob({ second: 0 }, function () {
    axios.post(`https://automation-tools-nu.vercel.app/api/slack`, {
      text: "안녕하세요 -!",
    });
  });
});
