import express from "express";
import type { Express, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
// import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
// import { db } from "../prisma.dev.db";

const app: Express = express();
const PORT = process.env.PORT || 8080;

const prisma = new PrismaClient();

app.get("/allTodos", async (req: Request, res: Response) => {
  const allTodos = await prisma.todo.findMany();
  return res.json(allTodos);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
