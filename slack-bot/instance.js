const dotenv = require("dotenv");
dotenv.config();
const axios = require("axios");

const instance = axios.create({
  baseURL: `https://hooks.slack.com/services/${process.env.SLACK_TOKEN}`,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

module.exports = instance;