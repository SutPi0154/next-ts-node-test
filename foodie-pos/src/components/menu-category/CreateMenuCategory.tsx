import { useAppDispatch } from "@/store/hook";
import { createMenuCategory } from "@/store/slices/menuCategory";
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

  const dispatch = useAppDispatch();
  const CreateNewMenuCategory = () => {
    dispatch(createMenuCategory(newMenuCategory));
    setNewMenuCategory(defaultMenuCategory);
    setOpen(false);
  };
  console.log(newMenuCategory);
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
