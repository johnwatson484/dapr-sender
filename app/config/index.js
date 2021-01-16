// Build config
const config = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  appName: 'Dapr Sender',
  messageTopic: process.env.MESSAGE_TOPIC
}

module.exports = config
