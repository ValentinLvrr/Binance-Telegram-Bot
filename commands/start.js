module.exports = async ctx => {
  await ctx.reply(`
   -> Welcome to the Binance bot! <-
- /see: consult the binance leaderboard
- /follow: follow binance trader
- /following: consult following list
- /startbot: start the tracking bot
- /stopbot: stop the tracking bot
  `)
}