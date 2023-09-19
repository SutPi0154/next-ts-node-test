import BackOfficeLayout from "@/components/BackOfficeLayout/BackofficeLayout";
import CreateMenu from "@/components/menu/CreateMenu";
import MenuCard from "@/components/menu/MenuCard";
import { useAppSelector } from "@/store/hook";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";

const MenuPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const menus = useAppSelector((store) => store.menu.items);
  console.log(menus);
  const dispatch = useDispatch();
  return (
    <BackOfficeLayout>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          onClick={() => {
            setOpen(true);
          }}
          variant="contained"
        >
          create
        </Button>
        <Box>
          <CreateMenu open={open} setOpen={setOpen} />
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            // justifyContent: "center",
            flexWrap: "wrap",
            gap: 3,
          }}
        >
          {menus.map((menu) => (
            <MenuCard key={menu.id} menu={menu} />
          ))}
        </Box>
      </Box>
    </BackOfficeLayout>
  );
};

export default MenuPage;
