// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectToDatabase } from "@/util/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const data = await db.collection("users").find().toArray();
  res.json(data);
}