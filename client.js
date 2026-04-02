const Redis = require("ioredis");

const client = new Redis();

client.on("connect", () => {
  console.log("Redis connected ✅");
});

client.on("error", (err) => {
  console.log("Redis error ❌", err);
});

module.exports = client;