import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { Menu } from "../../types/menu";

interface Prop {
  menu: Menu;
}

const MenuCard = ({ menu }: Prop) => {
  return (
    <Link href={`menu/${String(menu.id)}`} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          maxWidth: 300,
        }}
      >
        <CardActionArea
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            image={menu.assetUrl}
            alt="green iguana"
            sx={{ width: 200 }}
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
