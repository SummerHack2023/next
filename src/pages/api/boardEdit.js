import { ObjectId } from "mongodb";
import { connectDB } from "/util/database";

const handler = async (req, res) => {
  if (req.method == "POST") {
    const changedValue = {
      title: req.body.title,
      content: req.body.content,
    };
    const db = (await connectDB).db("hack");
    const result = await db
      .collection("post")
      .updateOne({ _id: new ObjectId(req.body._id) }, { $set: changedValue });

    if (result.modifiedCount === 1) {
      res.status(302).redirect(302, "/board");
    } else {
      res.status(400).send("Failed to update the post.");
    }
  } else {
    res.status(405).send("Method not allowed");
  }
};

export default handler;
