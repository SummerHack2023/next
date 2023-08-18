import { ObjectId } from "mongodb";
import { connectDB } from "/util/database";

const handler = async (req, res) => {
  if (req.method == "DELETE") {
    const db = (await connectDB).db("hack");
    const result = await db
      .collection("post")
      .deleteOne({ _id: new ObjectId(req.body) });
      res.status(302).send('삭제완료')
  } else {
    res.status(405).send("Method not allowed");
  }
};

export default handler;
