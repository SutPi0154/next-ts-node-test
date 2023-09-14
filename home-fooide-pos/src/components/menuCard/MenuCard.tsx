import { Menu } from "@/types/menu";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";

interface Prop {
  menu: Menu;
}

const MenuCard = ({ menu }: Prop) => {
  return (
    <Link href={String(menu.id)} style={{ textDecoration: "none" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={menu.assetUrl}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {menu.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
            <Typography>$ {menu.price}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default MenuCard;
