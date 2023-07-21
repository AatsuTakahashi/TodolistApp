import prisma from "../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { user_id, title } = req.body;
      const todo = await prisma.todo.create({
        data: {
          user_id,
          title,
        },
      });
      res.status(201).json(todo);
    } catch (error) {
      console.error(error.message);
      console.error(error.stack);
    }
  } else if (req.method === "GET") {
    const { id } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
      include: {
        todos: true,
      },
    });
    res.status(200).json(user);
  } else if (req.method === "PUT") {
    // データの更新
    const { id, type } = req.body;
    const todo = await prisma.todo.update({
      where: { id },
      data: {
        type,
      },
    });
    res.status(200).json(todo);
  }
}
