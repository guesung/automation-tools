const axios = require("axios");
const schedule = require("node-schedule");
const app = require("express")();
var moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

const SCHEDULE_PORT = 8000;

app.listen(SCHEDULE_PORT, () => {
  const job = schedule.scheduleJob({ hour: 0, minute: 0, minute: 0 }, function () {
    axios.post(`https://automation-tools-nu.vercel.app/api/slack`, {
      text: "안녕하세요 -!",
    });
  });
});
