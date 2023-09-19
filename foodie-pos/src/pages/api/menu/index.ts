// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
interface Menu {
  id: number;
  name: string;
  price: number;
  isArchived: boolean;
  assUrl?: string;
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
      // assetUrl: `https://images.ctfassets.net/awb1we50v0om/2Spf80TME2zIhLqsi3Zxv9/919421a45f3260ee426c99c35235f1c8/Plates03__3__copy3.jpg`,
      isArchived,
    };
    menus.push(newMenu);
    return res.send(menus);
  } else if (req.method === "GET") {
    return res.send(menus);
  }
  res.status(405).send("Invalid Method");
}
