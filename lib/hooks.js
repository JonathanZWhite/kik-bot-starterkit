const __CONFIG__ = require('../config')
const logger = require('../utils/logger')
const Bot = require('@kikinteractive/kik')
const moment = require('moment')

function hooks(bot) {
  // [handler] on greeting
  bot.onTextMessage(/^hi|hello|bonjour|yo|sup$/i, (incoming, bot) => {
    incoming.reply(`Hello human. I'm ${__CONFIG__.kik.botUsername} 🤖`);
  });

  // [handler] on time
  bot.onTextMessage(/give me the time$/i, (incoming, next) => {
    const time = moment.utc().format('YYYY-MM-DD HH:mm:ss')
    return incoming.reply(`The time is ${time}`)
  })

  // [handler] on name
  bot.onTextMessage(/what is your name?$/i, (incoming, next) => {
    return incoming.reply(`My name is ${__CONFIG__.kik.botUsername}`)
  })

  // [handler] on incoming message
  bot.onTextMessage((incoming, next) => {
    const message = Bot.Message.text('🐣 Try me!')
      .addTextResponse('Hi!')
      .addTextResponse('Give me the time')

    return incoming.reply(message)
  })

  // [handler] on subscribe to bot
  bot.onStartChattingMessage((incoming) => {
    bot.getUserProfile(incoming.from)
      .then((user) => {
        const message = Bot.Message.text(`Hey ${user.firstName}! Nice to meet you, I'll be your own personal assistant 🤖`)

        incoming.reply(message)
      });
  });
}

module.exports = hooks
