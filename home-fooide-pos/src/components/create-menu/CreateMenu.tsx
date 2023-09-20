import config from "@/config";
import { useAppDispatch } from "@/store/hook";
import { setMenu } from "@/store/slice/menuSlice";
import { CreateMenuType } from "@/types/menu";
import { Box, Button, Dialog, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}
const defaultNewMenu: CreateMenuType = {
  name: "",
  price: 0,
  assetUrl: "",
};
const CreateMenu = ({ open, setOpen }: Props) => {
  const [newMenu, setNewMenu] = useState(defaultNewMenu);
  const dispatch = useAppDispatch();
  const CreateMenuData = async () => {
    const api = await fetch(`${config.apiBaseUrl}/menu`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newMenu),
    });
    const menus = await api.json();
    setOpen(false);
    dispatch(setMenu(menus));
    setNewMenu(defaultNewMenu);
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
              setNewMenu({ ...newMenu, name: e.target.value });
            }}
          />
          <TextField
            sx={{ width: 500, mb: 5 }}
            placeholder="price"
            onChange={(e) => {
              setNewMenu({ ...newMenu, price: Number(e.target.value) });
            }}
          />
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Button
              variant="contained"
              onClick={CreateMenuData}
              sx={{ width: "fit-content" }}
            >
              Create
            </Button>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default CreateMenu;
