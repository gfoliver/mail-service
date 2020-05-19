const sendMail = require('../services/Mail')

module.exports = {
    async send(req, res) {

        const { to, subject, content } = req.body

        if (!to || !subject || !content)
            return res.json({
                status: false,
                message: 'Missing fields'
            })

        try {
            await sendMail(to, subject, content)

            return res.json({
                status: true,
                message: 'Email sent'
            })
        }
        catch(e) {
            return res.json({
                status: false,
                message: 'Error sending your email',
                error: e
            })
        }
    }
}