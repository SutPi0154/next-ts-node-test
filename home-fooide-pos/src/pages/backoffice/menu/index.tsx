import BackOfficeLayout from "@/components/backOfficeLayout";
import MenuCard from "@/components/create-menu/MenuCard";
import { useAppSelector } from "@/store/hook";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import CreateMenu from "../../../components/create-menu/CreateMenu";

const MenuPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const menus = useAppSelector((state) => state.menus.items);

  return (
    <BackOfficeLayout>
      <Box sx={{ m: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            onClick={() => {
              setOpen(true);
            }}
            variant="contained"
          >
            Create Menu
          </Button>
        </Box>
        <CreateMenu open={open} setOpen={setOpen} />
        <Box sx={{ display: "flex", gap: 5, flexWrap: "wrap", mt: 5 }}>
          {menus.map((menu) => (
            <MenuCard key={menu.id} menu={menu} />
          ))}
        </Box>
      </Box>
    </BackOfficeLayout>
  );
};

export default MenuPage;
