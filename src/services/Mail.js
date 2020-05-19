const { createTransport } = require('nodemailer')

async function sendMail(to, subject, content) {
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_EMAIL } = process.env

    const transport = createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_PORT == 465,
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASS
        }
    })

    try {
        const email = await transport.sendMail({
            from: SMTP_EMAIL,
            to: to,
            subject: subject,
            html: content
        })

        return email;
    }
    catch(e) {
        return { status: false, error: e };
    }
}

module.exports = sendMail