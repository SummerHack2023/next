import { ObjectId } from "mongodb";
import { connectDB } from "/util/database";

const handler = async (req, res) => {
  req.body = JSON.parse(req.body);
  if (req.method == "POST") {
    const changedValue = {
      participants: req.body.participants,
    };
    const db = (await connectDB).db("hack");
    const result = await db
      .collection("random")
      .updateOne({ _id: new ObjectId(req.body._id) }, { $set: changedValue });
    res.status(302).redirect(302, "/random");
  } else {
    res.status(405).send("Method not allowed");
  }
};

export default handler;
