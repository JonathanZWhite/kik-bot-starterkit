# kik-bot-starterkit
Starter kit for building bots with Kik

### Getting started
1. Visit [https://dev.kik.com/#/home](https://dev.kik.com/#/home) and follow their instructions for creating a bot
2. Run `npm install`
3. Install [ngrok](https://www.npmjs.com/package/ngrok) with `npm install ngrok -g`
4. Run `ngrok http 8080`. This will forward your `http://localhost:8080` to the `ngrok` address.
5. Go into `/config/index` and enter in your Kik bot credentials. Also, for the value of the key `webhook`, enter the `ngrok` url you got from the last step. 
6. Run `npm start`
7. Go into Kik and send a message to your bot and check your logs to see if you successfully received the message on your server.
