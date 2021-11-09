const { Client, Environment } = require('square');

// initialize client
const client = new Client({
  environment: Environment.Sandbox,
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
})

module.exports = {
  client: client 
}