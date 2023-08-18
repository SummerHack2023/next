import { connectDB } from "/util/database";
import bcrypt from 'bcrypt'

const handler = async (req, res) => {
  if (req.method == "POST") {
    const hash = await bcrypt.hash(req.body.password, 10)
    req.body.password = hash;
    const db = (await connectDB).db("hack");
    const result = await db
      .collection("user_cred")
      .insertOne(req.body)
      res.status(302).redirect(302, '/');
  } else {
    res.status(405).send("Method not allowed");
  }
};

export default handler;
