import config from "@/config";
import { CreateMenuType, Menu } from "@/types/menu";
import { Box, Button, Dialog, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  setMenus: (menu: Menu[]) => void;
}
const CreateMenu = ({ open, setOpen, setMenus }: Props) => {
  const [menu, setMenu] = useState<CreateMenuType>({ name: "", price: 0 });

  const CreateMenuData = async () => {
    const api = await fetch(`${config.apiBaseUrl}/menu`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(menu),
    });
    const menus = await api.json();
    setOpen(false);
    setMenus(menus);
    console.log(menus);
  };

  const DeleteMenu = async () => {
    const menuIdToDelete = 1;
    const api = await fetch(`${config.apiBaseUrl}/menu/${menuIdToDelete}`, {
      method: "DELETE",
    });
    const data = await api.json();
    console.log(data);
  };

  const updateMenu = async () => {
    const menuIdToUpdate = { id: 1, name: "new menu name", price: 5000 };
    const api = await fetch(`${config.apiBaseUrl}/menu/`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(menuIdToUpdate),
    });
    const data = await api.json();
    console.log(data);
  };
  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <DialogTitle>Create Menu</DialogTitle>
      <Box sx={{ padding: 5, bgcolor: "#E4E4D0", width: "full" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <TextField
            sx={{ width: 500, mb: 5 }}
            placeholder="name"
            type="text"
            onChange={(e) => {
              setMenu({ ...menu, name: e.target.value });
            }}
          />
          <TextField
            sx={{ width: 500, mb: 5 }}
            placeholder="price"
            onChange={(e) => {
              setMenu({ ...menu, price: Number(e.target.value) });
            }}
          />
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Button
              variant="contained"
              onClick={CreateMenuData}
              sx={{ width: "fit-content" }}
            >
              Create Menu
            </Button>
            {/* <Button
              variant="contained"
              onClick={DeleteMenu}
              sx={{ width: "fit-content" }}
            >
              delete Menu
            </Button> */}
            {/* <Button
              variant="contained"
              onClick={updateMenu}
              sx={{ width: "fit-content" }}
            >
              update Menu
            </Button> */}
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default CreateMenu;
