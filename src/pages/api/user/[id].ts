import prisma from "../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { id } = req.query;
    const userId = String(id);
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        todos: true,
      },
    });
    res.status(200).json(user);
  }
}
