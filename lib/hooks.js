const __CONFIG__ = require('../config')
const logger = require('../utils/logger')

function hooks(bot) {
  // [handler] on greeting
  bot.onTextMessage(/^hi|hello|bonjour|yo|sup$/i, (incoming, bot) => {
    incoming.reply(`Hello human. I'm ${__CONFIG__.kik.botUsername} 🤖`);
  });

  // [handler] on incoming message
  bot.onTextMessage((incoming, next) => {
    return incoming.reply('🐣 ' + incoming.body)
  })

  // [handler] on subscribe to bot
  bot.onStartChattingMessage((incoming) => {
    bot.getUserProfile(incoming.from)
      .then((user) => {
        const message = Bot.Message.text(`Hey ${user.firstName}! Nice to meet you, I'll be your own personal assistant 🤖`)
          .addTextResponse('Hi!')
          .addTextResponse('What\'s the time?')
          .addTextResponse('What\'s your name?');

          incoming.reply(message)
      });
  });
}

module.exports = hooks
