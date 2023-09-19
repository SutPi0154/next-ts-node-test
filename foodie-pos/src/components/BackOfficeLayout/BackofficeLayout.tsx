import CategoryIcon from "@mui/icons-material/Category";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import {
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const BackOfficeLayout = ({ children }: Props) => {
  return (
    <Box>
      <Box
        sx={{
          height: 90,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#171010",
        }}
      >
        <Typography sx={{ fontSize: 50, fontWeight: 400, color: "#fff" }}>
          Foodie pos - Back Office App
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            height: "90vh",
            width: 300,
            bgcolor: "#423F3E",
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "#fff" }}
            href={"/back-office/menu"}
          >
            <ListItemButton>
              <ListItemIcon>
                <RestaurantMenuIcon sx={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary={<Typography sx={{}}>menu</Typography>} />
            </ListItemButton>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#fff" }}
            href={"/back-office/menu-category"}
          >
            <ListItemButton>
              <ListItemIcon>
                <CategoryIcon sx={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary={<Typography>menu category</Typography>} />
            </ListItemButton>
          </Link>
        </Box>
        <Box sx={{ width: "100%", m: 4 }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default BackOfficeLayout;
