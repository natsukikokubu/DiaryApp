import { supabase } from "../app/utils/supabase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { data, error } = await supabase.from("diaries").select("*");
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    return res.status(200).json(data);
  }
}
