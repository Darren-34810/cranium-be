import db from '../models/index.js';
// import mg from '../utils/mailgun.js';

const { UserWestcon }  = db;

// console.log(process.env.MAILGUN_API_KEY);

// console.log(db.UserWestcon);

export const createTicket = async (req, res) => {
  console.log(req.body);
  const {name, email, phoneNumber, ticket, notify} = req.body;

  try{
    const user = await UserWestcon.create({
      name, email, phoneNumber, ticket, notify
    });
    
    // mg.messages.create(process.env.MAILGUN_DOMAIN)

    return res.send(user);
  } catch (err) {
    console.log(err);
    return res.status(500).send({message: err.message || 'Some error insert new ticket'});
  }
  
}

export const updateTicket = (req, res) => {

}

export const notifyGunmail = (req, res) => {

}

