const config = require('../config')
const { MessageSender } = require('../messaging')

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
      const queueSender = new MessageSender('queue-sender', config.queueConfig)
      await queueSender.sendMessage(message)
      await queueSender.closeConnection()
      const topicSender = new MessageSender('topic-sender', config.topicConfig)
      await topicSender.sendMessage(message)
      await topicSender.closeConnection()
      response = 'Message sent'
    } catch (err) {
      response = err
    }

    return h.view('home', { message: response })
  }
}]
