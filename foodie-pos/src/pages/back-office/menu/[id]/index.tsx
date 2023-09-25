import BackOfficeLayout from "@/components/BackOfficeLayout/BackofficeLayout";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { UpdateMenuThunk } from "@/store/slices/menuSlice";
import { Box, Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const UpdateMenu = () => {
  const [name, setName] = useState<string>("");
  const menus = useAppSelector((state) => state.menus.items);
  const dispatch = useAppDispatch();
  const param = useRouter();
  const menuId = Number(param.query.id);
  const menu = menus.find((menu) => menu.id === menuId);
  if (!menu) return null;
  return (
    <BackOfficeLayout>
      <Box sx={{ display: "flex" }}>
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          defaultValue={menu?.name}
          sx={{ width: 500 }}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Box>
      <Button
        variant="outlined"
        sx={{ width: "fit-content", mt: 2 }}
        onClick={() => {
          dispatch(UpdateMenuThunk({ id: menuId, name }));
        }}
      >
        Update
      </Button>
    </BackOfficeLayout>
  );
};

export default UpdateMenu;
