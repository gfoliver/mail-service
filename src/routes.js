const { Router } = require('express')
const MailController = require('./controllers/MailController')

const app = Router()

app.post('/send', MailController.send)

module.exports = app