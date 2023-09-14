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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 80,
          bgcolor: "#94A684",
        }}
      >
        <Typography sx={{ color: "#FFEEF4" }} variant="h3">
          Foodie Pos - BackOffice App
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            minHeight: "90vh",
            bgcolor: "#AEC3AE",
            width: 250,
          }}
        >
          <Link href={"/backoffice/menu"} style={{ textDecoration: "none" }}>
            <ListItemButton>
              <ListItemIcon>
                <RestaurantMenuIcon
                  sx={{ fontSize: 30, color: "whiteSmoke" }}
                />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    sx={{ fontSize: 20, fontWeight: 400, color: "whitesmoke" }}
                  >
                    Menu
                  </Typography>
                }
              />
            </ListItemButton>
          </Link>
          <Link
            href={"/backoffice/menuCategory"}
            style={{ textDecoration: "none" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <CategoryIcon sx={{ fontSize: 30, color: "whiteSmoke" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    sx={{ fontSize: 20, fontWeight: 400, color: "whitesmoke" }}
                  >
                    Menu Category
                  </Typography>
                }
              />
            </ListItemButton>
          </Link>
        </Box>
        <Box sx={{ width: "100%", m: 4 }}> {children}</Box>
      </Box>
    </Box>
  );
};

export default BackOfficeLayout;
