import Detail from "../../components/board/Detail";
import { ObjectId } from "mongodb";
import { connectDB } from "/util/database.js";
import { authOptions } from "@/pages/api/auth/[...nextauth].js"
import { getServerSession } from "next-auth"
import "public/css/detail.css";

const detail = async (props) => {
  const db = (await connectDB).db("hack");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  result._id = result._id.toString()
  const session = await getServerSession(authOptions)
  return <Detail boardList={result} session={session}/>;
};

export default detail;
