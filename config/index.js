module.exports = {
  local: {
    port: 8080,
    kik: {
      apiKey: 'your api key here',
      botUsername: 'bot username here',
      webhook: 'ngrok url here'
    }
  }
}[process.env.NODE_ENV || 'local']
