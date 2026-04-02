const client = require("./client.js");

async function init() {

  const result = await client.get("user:3");
  console.log("result:", result);
}

init();