import RandomList from "../components/random/RandomList";
import { ObjectId } from "mongodb";
import { connectDB } from "/util/database.js";
import { authOptions } from "@/pages/api/auth/[...nextauth].js"
import { getServerSession } from "next-auth"

const Random = async (props) => {
  const db = (await connectDB).db("hack");
  let result = await db
    .collection("random")
    .find().toArray();
    result = result.map(doc => {
      doc._id = doc._id.toString();
      return doc;
    });
    result = result.reverse();
  const session = await getServerSession(authOptions)
  return (
    <RandomList randomList={result} session={session}/>
  );
};

export default Random;
