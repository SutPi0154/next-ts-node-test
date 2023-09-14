import BackOfficeLayout from "@/components/backOfficeLayout";
import config from "@/config";
import { Menu } from "@/types/menu";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import CreateMenu from "./CreateMenu";

const MenuPage = () => {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const fetchMenu = async () => {
    const api = await fetch(`${config.apiBaseUrl}/menu`);
    const data = await api.json();
    console.log(data);
    setMenus(data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);
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
        <CreateMenu open={open} setOpen={setOpen} setMenus={setMenus} />
        <Box sx={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
          {/* {menus.map((menu) => (
            <MenuCard key={menu.id} menu={menu} />
          ))} */}
        </Box>
      </Box>
    </BackOfficeLayout>
  );
};

export default MenuPage;
