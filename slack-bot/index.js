const instance = require("./instance");

const sendMessageToSlack = async (message) => {
  const result = await instance.post("", {
    text: message,
  },);
  console.log(result);
}
sendMessageToSlack('hello')