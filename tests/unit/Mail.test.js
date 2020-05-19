require('dotenv-safe').config({
    allowEmptyValues: true
})

const sendMail = require('../../src/services/Mail')

test('Tests Mail Service', async () => {
    const to = "test@test.com",
        subject = "test",
        content = "<h1>Testing</h1>"
    
    const email = await sendMail(to, subject, content)

    expect(email).toHaveProperty('messageId')
    expect(email).toHaveProperty('envelope.to', [to])
})