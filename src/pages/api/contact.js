const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const { fullname, email, message } = JSON.parse(req.body);
  const contactInfo = `
  Name: ${fullname}\r\n
  Email: ${email}\r\n
  Message: ${message}
  `

  const msg = {
    to: 'rafidmostafa13@gmail.com',
    from: 'rafidmostafa13@gmail.com',
    subject: `${fullname} contacted you from your portfolio website`,
    name: fullname,
    text: contactInfo,
    html: contactInfo.replace(/\r\n/g, '<br/>')
  };

  try {
    await sgMail.send(msg);
    res.json({ message: `Email has been sent` });
  } catch (error) {
    res.status(500).json({ error: 'Error sending email' });
  }
}