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
  bot.onStartChattingMessage((message) => {
    bot.getUserProfile(message.from)
      .then((user) => {
          message.reply(`Hey ${user.firstName}! Nice to meet you, I'll be your own personal assistant 🤖`);
      });
  });
}

module.exports = hooks
