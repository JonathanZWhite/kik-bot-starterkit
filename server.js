'use strict';

const __CONFIG__ = require('./config');
const Bot = require('@kikinteractive/kik');
const request = require('superagent');
const logger = require('./utils/logger');

// Configure the bot API endpoint, details for your bot
const bot = new Bot({
  username: __CONFIG__.kik.botUsername,
  apiKey: __CONFIG__.kik.apiKey,
  baseUrl: __CONFIG__.kik.baseUrl,
});

// initial authentication
request('POST', 'https://api.kik.com/v1/config')
  .auth(__CONFIG__.kik.botUsername, __CONFIG__.kik.apiKey)
  .send({
    "webhook": "http://d3344583.ngrok.io/incoming",
    "features": {
       "manuallySendReadReceipts": false,
       "receiveReadReceipts": false,
       "receiveDeliveryReceipts": false,
       "receiveIsTyping": false
    }
  })
  .end((err, resp) => {
    if (err) {
      return logger.log('error', err);
    }

    logger.log('info', 'authentication success')
  });

bot.onTextMessage((message) => {
  console.log('========= RECEIVED MESSAGE:', message);

  message.reply(message.body);
});

// Set up your server and start listening
let server = http
  .createServer(bot.incoming())
  .listen(process.env.PORT || 8080);
