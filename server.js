'use strict'

const http = require('http')
const __CONFIG__ = require('./config')
const Bot = require('@kikinteractive/kik')
const request = require('superagent')
const logger = require('./utils/logger')
const hooks = require('./lib/hooks')

// configure the bot API endpoint, details for your bot
const bot = new Bot({
  username: __CONFIG__.kik.botUsername,
  apiKey: __CONFIG__.kik.apiKey,
  baseUrl: __CONFIG__.kik.baseUrl
})

// updates configuration and auth
bot.updateBotConfiguration()

// incoming message handlers
hooks(bot)

// Set up your server and start listening
let server = http
  .createServer(bot.incoming())
  .listen(__CONFIG__.port, () => {
    logger.log('info', `🙌  => server running on port ${__CONFIG__.port}`)
  })
