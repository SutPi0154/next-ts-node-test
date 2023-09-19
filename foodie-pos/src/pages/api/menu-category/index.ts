// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface MenuCategory {
  name: string;
  id: number;
  isAvailable: boolean;
  isArchived: boolean;
}
let menuCategories: MenuCategory[] = [];
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const isValid = req.body.name;
    if (!isValid) return res.status(400).send("bad request");
    const newId =
      menuCategories.length === 0
        ? 1
        : menuCategories[menuCategories.length - 1].id + 1;
    const isArchived = false;
    const newMenuCategory = { ...req.body, isArchived, id: newId };
    menuCategories.push(newMenuCategory);
    return res.send(menuCategories);
  } else if (req.method === "GET") {
    return res.send(menuCategories);
  }

  res.status(405).send("Invaild Method");
}
