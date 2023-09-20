import CategoryIcon from "@mui/icons-material/Category";
import { Box, Paper, Typography } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  href?: string;
  subtitle?: string;
}

const MenuCategoryCard = ({ icon, href, subtitle, title }: Props) => {
  if (href) {
    return (
      <Link href={href} style={{ textDecoration: "none", color: "black" }}>
        <Paper
          elevation={2}
          sx={{
            width: 170,
            height: 170,
            p: 2,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CategoryIcon />
          <Typography sx={{ fontSize: "20px", fontWeight: "800" }}>
            {title}
          </Typography>
          {subtitle}
        </Paper>
      </Link>
    );
  }
  return (
    <Box>
      <Paper
        elevation={2}
        sx={{
          p: 2,
          width: 170,
          height: 170,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CategoryIcon />
        <Typography sx={{ fontSize: "20px", fontWeight: "800" }}>
          {title}
        </Typography>
        {subtitle}
      </Paper>
    </Box>
  );
};

export default MenuCategoryCard;
