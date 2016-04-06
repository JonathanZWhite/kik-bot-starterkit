# kik-bot-starterkit
Starter kit for building bots with Kik

### Getting started
1. Run `npm install`
2. Install [ngrok](https://www.npmjs.com/package/ngrok) with `npm install ngrok -g`
3. Run `ngrok http 8080`. This will forward your `http://localhost:8080` to the `ngrok` address.
4. Go into `/config/index` and enter in your Kik bot credentials. Also, for the value of the key `webhook`, enter the `ngrok` url you got from the last step. 
5. Run `npm start`
6. Go into Kik and send a message to your bot and check your logs to see if you successfully received the message on your server.
