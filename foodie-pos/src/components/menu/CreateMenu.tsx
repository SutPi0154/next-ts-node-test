import config from "@/config";
import { useAppDispatch } from "@/store/hook";
import { setMenu } from "@/store/slices/menuSlice";
import { CreateMenuType } from "@/types/menu";
import { Box, Button, Dialog, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";
interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}
const DefaultNewMenu: CreateMenuType = {
  name: "",
  price: 0,
  assetUrl: "",
};

const CreateMenu = ({ open, setOpen }: Props) => {
  const [newMenu, setNewMenu] = useState(DefaultNewMenu);
  const dispatch = useAppDispatch();
  const CreateNewMenu = async () => {
    const api = await fetch(`${config.apiBaseUrl}/menu`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newMenu),
    });
    const menus = await api.json();
    console.log(menus);
    dispatch(setMenu(menus));
    setOpen(false);
    setNewMenu(DefaultNewMenu);
  };

  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <DialogTitle sx={{ bgcolor: "#362222", color: "#FFF" }}>
        {" "}
        create Menu{" "}
      </DialogTitle>
      <Box
        sx={{
          p: 5,
          width: "full",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#423F3E",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <TextField
            placeholder="name"
            onChange={(e) => {
              setNewMenu({ ...newMenu, name: e.target.value });
            }}
            sx={{ mb: 3, width: 500, color: "#FFF" }}
          />
          <TextField
            placeholder="price"
            onChange={(e) => {
              setNewMenu({ ...newMenu, price: Number(e.target.value) });
            }}
            sx={{ mb: 5, width: 500, color: "#FFF" }}
          />
          <TextField
            placeholder="img "
            onChange={(e) => {
              setNewMenu({ ...newMenu, assetUrl: e.target.value });
            }}
            sx={{ mb: 5, width: 500, color: "#FFF" }}
          />
        </Box>
        <Box>
          <Button onClick={CreateNewMenu} variant="contained">
            create
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};

export default CreateMenu;
