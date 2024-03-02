const { Telegraf } = require("telegraf")

const bot = new Telegraf("5452131552:AAGk0IxNPtWswXAOJObsWbZqx_KL-Rhpz9o")

bot.start((ctx) => ctx.reply("wellcome"))
console.log("test")

bot.launch()