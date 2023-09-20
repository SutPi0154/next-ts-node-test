import config from "@/config";
import { useAppDispatch } from "@/store/hook";
import { setMenuCategory } from "@/store/slice/menuCategorySlice";
import { CreateMenuCategoryType } from "@/types/menuCategory";
import {
  Box,
  Button,
  Dialog,
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
const defaultNewMenuCategory: CreateMenuCategoryType = {
  name: "",
  isAvailable: true,
};
const CreateMenuCategory = ({ open, setOpen }: Props) => {
  const [newMenuCategory, setNewMenuCategory] = useState(
    defaultNewMenuCategory
  );
  const dispatch = useAppDispatch();

  const CreateMenuData = async () => {
    const api = await fetch(`${config.apiBaseUrl}/menu-category`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newMenuCategory),
    });
    const menuCategories = await api.json();
    setOpen(false);
    dispatch(setMenuCategory(menuCategories));
    setNewMenuCategory(defaultNewMenuCategory);
    console.log(menuCategories);
  };

  const handleMenuUpdate = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewMenuCategory({
      ...newMenuCategory,
      name: e.target.value,
      isAvailable: newMenuCategory.isAvailable,
    });
  };
  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <DialogTitle>Create Menu Category</DialogTitle>
      <Box sx={{ padding: 5, bgcolor: "#E4E4D0", width: "full" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <TextField
            sx={{ width: 500, mb: 5 }}
            placeholder="name"
            type="text"
            onChange={handleMenuUpdate}
          />
          <FormControlLabel
            control={
              <Switch
                defaultChecked={newMenuCategory.isAvailable}
                onChange={(e, value) => {
                  setNewMenuCategory({
                    ...newMenuCategory,
                    isAvailable: value,
                  });
                }}
              />
            }
            label="isAvailable"
          />

          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Button
              variant="contained"
              onClick={CreateMenuData}
              sx={{ width: "fit-content" }}
            >
              Create
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

export default CreateMenuCategory;
