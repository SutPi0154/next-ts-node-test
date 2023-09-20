// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface MenuCategory {
  id: number;
  name: string;
  isArchived: boolean;
  isAvailable: boolean;
}
let menuCategories: MenuCategory[] = [];
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // data validation
    const isValid = req.body.name;
    if (!isValid)
      return res.status(400).send("bad request. Missing required files");
    const newId =
      menuCategories.length === 0
        ? 1
        : menuCategories[menuCategories.length - 1].id + 1;
    const newMenuCategory = {
      ...req.body,
      isArchived: false,
      id: newId,
      // isAvailable: req.body.isAvailable ? req.body.isAvailable : true,
    };
    menuCategories.push(newMenuCategory);
    return res.send(menuCategories);
  } else if (req.method === "GET") {
    return res.send(menuCategories);
  }
  res.status(405).send("invalid method");
}
