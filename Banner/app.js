const { Telegraf } = require('telegraf')
require('dotenv').config()
console.log(process.env.BANNER)

const bot = new Telegraf (process.env.BANNER)

bot.use( (ctx) => {
    ctx.reply("hello world")
})

bot.launch()