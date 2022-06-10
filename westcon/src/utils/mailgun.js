import formData from 'form-data';
import Mailgun from 'mailgun.js';
require('dotenv').config();

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: process.env.MAILGUN_USERNAME || 'api',
  key: process.env.MAILGUN_API_KEY
});

export default mg;