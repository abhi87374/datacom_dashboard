import { connectToDatabase } from "@/util/mongodb";

export default async function handler(req, res) {
    const { year } = req.query;
    console.log(year);
    const { db } = await connectToDatabase();
    const data = await db
        .collection("activities")
        .find({ year:Number(year)})
        .toArray();
    res.json(data);
    }