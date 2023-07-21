import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    const { id } = req.query;
    const post_id = String(id);
    await prisma.todo.delete({
      where: { id: post_id },
    });
    res.status(204).end();
  } else if (req.method === "GET") {
    const { id } = req.query;
    const userId = String(id);
    const todos = await prisma.todo.findMany({
      where: {
        user_id: userId,
      },
    });
    res.status(200).json(todos);
  }
}
