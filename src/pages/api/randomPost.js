import { connectDB } from "/util/database.js";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const db = (await connectDB).db("hack");
      const result = await db.collection("random").insertOne(req.body);
      res.status(200).redirect(302, "/random");
    } catch (error) {
      console.error("Error inserting data:", error);
      res.status(500).send("Error inserting data");
    }
  } else {
    res.status(405).send("Method not allowed");
  }
};

export default handler;
