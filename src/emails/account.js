const sgMail = require('@sendgrid/mail');
//task-app

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'deepsingh.cts@gmail.com',
        subject: 'Welcome to Task-App',
        html: `<div>
                    <p>Welcome to the app ${name}!. Let us know how have you benefitted from this app.</p><br/><br/><br/>
                    <div>with <span style="color: #a33e39">&#x2665; </span>from Task-App</div>
                </div>`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'deepsingh.cts@gmail.com',
        subject: 'Your feedback is important',
        html: `<div>
                    <p>Goodbye ${name}!, please let us know how we can improve the Task-App to serve you better. 
                    Thanks for being with us. Stay safe, stay healthy.</p><br/><br/><br/>
                    <div>with <span style="color: #a33e39">&#x2665; </span>from Task-App</div>
                </div>`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
