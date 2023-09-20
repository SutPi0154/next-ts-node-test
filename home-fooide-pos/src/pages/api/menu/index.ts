// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
interface Menu {
  name: string;
  id: number;
  price: number;
  assetUrl?: string;
  isArchived: boolean;
}

let menus: Menu[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const isValid = req.body.name;
    if (!isValid) return res.status(400).send("bad request");
    const newId = menus.length === 0 ? 1 : menus[menus.length - 1].id + 1;
    const isArchived = false;
    const newMenu = {
      ...req.body,
      id: newId,
      isArchived,
      assetUrl:
        "https://www.freshnlean.com/wp-content/uploads/2021/03/Meal-Plan-plate-protein.png",
    };
    menus.push(newMenu);
    return res.send(menus);
  } else if (req.method === "GET") {
    return res.send(menus);
  }
  res.status(405).send("Invalid Method");
}
