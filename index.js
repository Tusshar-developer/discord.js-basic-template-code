const Discord = require("discord.js");
const client = new Discord.Client();
const token = "Your Bot Token goes here";

client.on("ready", () => {
  console.log("Bot is online!");
});

client.on("message", (message) => {
  if (message.content === "ping") {
    message.channel.send("Pong");
  }
});

client.login(token);
