const config = require('../config')
const api = require('../api')

module.exports = [{
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return h.view('home')
  }
}, {
  method: 'POST',
  path: '/',
  handler: async (request, h) => {
    let response
    try {
      const message = { body: request.payload.message }
      await api.post(config.messageTopic, message)
      response = 'Message sent'
    } catch (err) {
      response = err
    }

    return h.view('home', { message: response })
  }
}]
