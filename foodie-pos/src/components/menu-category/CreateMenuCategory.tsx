import config from "@/config";
import { useAppDispatch } from "@/store/hook";
import { setMenuCategory } from "@/store/slices/menuCategory";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Switch,
  TextField,
} from "@mui/material";
import { useState } from "react";
interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}
const defaultMenuCategory = {
  name: "",
  isAvailable: true,
};

const CreateMenuCategory = ({ open, setOpen }: Props) => {
  const [newMenuCategory, setNewMenuCategory] = useState(defaultMenuCategory);
  console.log(newMenuCategory);
  const dispatch = useAppDispatch();
  const CreateNewMenuCategory = async () => {
    const api = await fetch(`${config.apiBaseUrl}/menu-category`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newMenuCategory),
    });
    const data = await api.json();
    console.log(data);
    dispatch(setMenuCategory(data));
    setNewMenuCategory(defaultMenuCategory);
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <DialogTitle sx={{ bgcolor: "#362222", color: "#FFF" }}>
        create menu category
      </DialogTitle>
      <DialogContent sx={{ bgcolor: "#423F3E" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 5,
          }}
        >
          <TextField
            placeholder="name"
            sx={{ width: 500, mb: 3, color: "white" }}
            onChange={(e) => {
              setNewMenuCategory({ ...newMenuCategory, name: e.target.value });
            }}
          />
          <FormControlLabel
            sx={{ mb: 5, color: "white" }}
            label="isAvailable"
            control={
              <Switch
                defaultChecked={defaultMenuCategory.isAvailable}
                onChange={(e, value) => {
                  setNewMenuCategory({
                    ...newMenuCategory,
                    isAvailable: value,
                  });
                }}
              />
            }
          />
          <Box>
            <Button variant="contained" onClick={CreateNewMenuCategory}>
              create
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CreateMenuCategory;
