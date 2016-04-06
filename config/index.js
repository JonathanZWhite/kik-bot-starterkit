module.exports = {
  local: {
    kik: {
      apiKey: 'your api key here',
      botUsername: 'bot username here',
      baseUrl: 'ngrok url here'
    }
  }
}[process.env.NODE_ENV || 'local']
