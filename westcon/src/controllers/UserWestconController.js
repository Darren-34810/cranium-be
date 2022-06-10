import db from '../models/index.js';
import mg from '../utils/mailgun.js';

const { UserWestcon }  = db;

// console.log(db.UserWestcon);

export const createTicket = async (req, res) => {
  console.log(req.body);
  const {name, email, phoneNumber, ticket, notify} = req.body;

  try{
    const user = await UserWestcon.create({
      name, email, phoneNumber, ticket, notify
    });
    
    mg.messages.create(process.env.MAILGUN_DOMAIN, {
      from: `Le Testing <rucci@texting.com>`,
      to: [`${email}`],
      text: 'Some Le Testing',
      html: `<h1>Here is your ticket <b>${ticket}</b> </h1>`
    }).then(response => {
      console.log(response);
      res.send({message: response.message});
    }).catch(error => {
      console.log(error);
      res.status(500).send({message: error.message || 'Error in sending email'});
    });
    
    // return res.send(user);
  } catch (err) {
    console.log(err);
    return res.status(500).send({message: err.message || 'Some error insert new ticket'});
  }
  
}

export const updateTicket = (req, res) => {

}

export const notifyGunmail = (req, res) => {

}

