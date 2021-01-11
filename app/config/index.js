// Build config
const config = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  appName: 'Dapr Sender',
  queueConfig: {
    host: process.env.AZURE_SERVICE_BUS_HOST,
    username: process.env.AZURE_SERVICE_BUS_USERNAME,
    password: process.env.AZURE_SERVICE_BUS_PASSWORD,
    address: process.env.AZURE_SERVICE_BUS_QUEUE,
    type: 'queue'
  },
  topicConfig: {
    host: process.env.AZURE_SERVICE_BUS_HOST,
    username: process.env.AZURE_SERVICE_BUS_USERNAME,
    password: process.env.AZURE_SERVICE_BUS_PASSWORD,
    address: process.env.AZURE_SERVICE_BUS_TOPIC,
    type: 'topic'
  },
  subscriptionConfig: {
    host: process.env.AZURE_SERVICE_BUS_HOST,
    username: process.env.AZURE_SERVICE_BUS_USERNAME,
    password: process.env.AZURE_SERVICE_BUS_PASSWORD,
    address: process.env.AZURE_SERVICE_BUS_SUBSCRIPTION,
    topic: process.env.AZURE_SERVICE_BUS_TOPIC,
    type: 'subscription'
  }
}

module.exports = config
