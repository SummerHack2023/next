import { connectDB } from "/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth].js"

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions)
  if (req.method == 'POST'){
    req.body = JSON.parse(req.body)
    const data = {
      content : req.body.comment,
      parent : new ObjectId(req.body.board),
      author : session.user.name,
      date: req.body.date
    }
    let db = (await connectDB).db('hack');
    let result = await db.collection('comment').insertOne(data);
    res.status(200).json('저장완료')
  }
} 