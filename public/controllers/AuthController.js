import axios from "axios";
import Ports from "../config/Ports.js";
import jsonwebtoken from "jsonwebtoken";


export const register = (req, res) => {
  console.log(req.body);
  // return res.send(req.body);
  axios.post(`${Ports.user}/api/user`, req.body)
    .then(response => {
      console.log(response.data);
      return res.send(response.data);
    }).catch(err => {
      console.log(err.response.data);
      return res.send(err.response.data);
    });
}

export const login = async (req, res) => {
  console.log(req.body);

  // Cara 1 
  // axios.get(`${Ports.user}/api/${email}`)
  //   .then(response => {
  //     console.log(response.data);
  //     return res.send(response.data);
  //   }).catch(err => {
  //     console.log(err.response.data);
  //     return res.send(err.response.data);
  //   });

  // Cara 2
  let user;
  try {
    user = await axios.get(`${Ports.user}/api/user/findOne/${req.body.email}`);
    console.log(user.data);
  } catch (err) {
    console.log(err);
    // Asumsikan bahwa User Service Error / Hilang / Ganti PORT
    if (err.response === undefined) {
      console.log('500 - Internal Server Error');
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    return res.status(404).json(err.response.data);
    // return res.send(err.response.data);
  }
  const { id, firstName, lastName, email } = user.data;
  // Check password from client with password database
  if (req.body.password !== user.data.password)
    return res.status(403).json({ message: 'Wrong Password' }); // Forbidden

  const accessToken = jsonwebtoken.sign(
    { id, firstName, lastName, email },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '5s' }
  );

  const refreshToken = jsonwebtoken.sign(
    { id, firstName, lastName, email },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: '1d' }
    // { expiresIn: '4m' }
  );

  try {
    const response = await axios.patch(`${Ports.user}/api/user/refreshToken/${email}`, {
      refreshToken: refreshToken
    });
    console.log(response.data);

  } catch (err) {
    console.log(err);
    // Asumsikan bahwa User Service Error / Hilang / Ganti PORT
    if (err.response === undefined) {
      console.log('500 - Internal Server Error');
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    return res.status(404).json(err.response.data);
  }
  res
    .cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,  // 1 days
      // maxAge: 4 * 1000,  // 4 mins
      // secure: true // Ketika https
    })
    .json({ accessToken });
}

export const logout = (req, res) => {
  // const refreshToken = req.cookies.refreshToken;
  // if (!refreshToken) console.log("Refresh Token gak ada");
  // console.log(refreshToken);
  console.log('logout');
  res.clearCookie('refreshToken');
  return res.sendStatus(200);
}

export const refreshToken = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  console.log(refreshToken);
  if(!refreshToken) return res.status(401);// .send({message: "Unauthorized"});

  jsonwebtoken.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (err, decode) => {
    console.log(err);
    console.log(decode);
    if (err) return res.sendStatus(403);

    try {
      const user = await axios.get(`${Ports.user}/api/user/findUsers/${refreshToken}`);
      if (!user.data.length) return res.sendStatus(403);
      
      console.log(user.data);
      const {id, firstName, lastName, email} = user.data;
      const accessToken = jsonwebtoken.sign(
        {id, firstName, lastName, email},
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: '10s'}
      );
      return res.send(accessToken);
    } catch(err) {
      console.log(err.data);
    }

  });

  
  
  // const user = await axios.
}