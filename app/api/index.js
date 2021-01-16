const wreck = require('wreck')

async function post (url, data, token) {
  const { payload } = await wreck.post(`${url}`, {
    payload: data,
    ...getConfiguration(token)
  })
  return payload
}

function getConfiguration (token) {
  return {
    headers: {
      Authorization: token || ''
    },
    json: true
  }
}

module.exports = {
  post
}
