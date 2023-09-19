import { Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";
interface Props {
  id: number;
  name: string;
  icon: ReactNode;
  href: string;
}
const MenuCategoryCard = ({ id, name, icon, href }: Props) => {
  return (
    <Link href={href} style={{ textDecoration: "none", color: "#FFF" }}>
      <Card
        sx={{
          maxWidth: 345,
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {icon}
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MenuCategoryCard;
