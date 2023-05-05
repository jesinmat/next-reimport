import { NextApiRequest, NextApiResponse } from "next";
import cache from "lib/cache";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("API request received");
  cache.setId("2");
  res.status(200).json({ text: "Success" });
}
