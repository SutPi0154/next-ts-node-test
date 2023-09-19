import { Menu } from "@/types/menu";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";

interface Props {
  menu: Menu;
}

const MenuCard = ({ menu }: Props) => {
  return (
    <Link
      href={`/back-office/menu/${menu.id}`}
      style={{ textDecoration: "none", color: "#FFF" }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          sx={{ height: 300 }}
          image={menu.assetUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {menu.name}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            sx={{ color: "#423F3E" }}
            component="div"
          >
            $ {menu.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Link>
  );
};

export default MenuCard;
