module.exports = {
  local: {
    port: 8080,
    kik: {
      apiKey: 'your api key here', // [Non functional example] 0a275f34-31da-4ds1-b3c9-d4576f38bac8
      botUsername: 'bot username here', // [Non functional example] startkitbot
      webhook: 'ngrok url here' // [Non functional example] http://4b7e3c1e.ngrok.io
    }
  }
}[process.env.NODE_ENV || 'local']
