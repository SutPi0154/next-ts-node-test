import BackOfficeLayout from "@/components/BackOfficeLayout/BackofficeLayout";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { UpdateMenuThunk } from "@/store/slices/menuSlice";
import { Box, Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const MenuDetail = () => {
  const [name, setName] = useState("");
  const menuCategories = useAppSelector((state) => state.menuCategories.items);
  const param = useRouter();
  const menuCategoryId = Number(param.query.id);
  const menuCategory = menuCategories.find(
    (item) => item.id === menuCategoryId
  );
  const dispatch = useAppDispatch();
  console.log(menuCategory);
  if (!menuCategory?.name) return null;
  return (
    <BackOfficeLayout>
      <Box sx={{ display: "flex" }}>
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          defaultValue={menuCategory?.name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          sx={{ width: 500 }}
        />
      </Box>
      <Button
        variant="outlined"
        sx={{ width: "fit-content", mt: 2 }}
        onClick={() => {
          dispatch(UpdateMenuThunk({ id: menuCategoryId, name }));
        }}
      >
        Update
      </Button>
    </BackOfficeLayout>
  );
};

export default MenuDetail;
