import BackOfficeLayout from "@/components/backOfficeLayout";
import CreateMenuCategory from "@/components/menuCategory/CreateMenuCategory";
import MenuCategoryCard from "@/components/menuCategoryCard/MenuCategoryCard";
import config from "@/config";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { setMenuCategory } from "@/store/slice/menuCategorySlice";
import CategoryIcon from "@mui/icons-material/Category";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";

const MenuCategoryPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const menuCategories = useAppSelector((state) => state.menuCategory.items);
  const dispatch = useAppDispatch();
  const fetchMenu = async () => {
    const api = await fetch(`${config.apiBaseUrl}/menu-category`);
    const data = await api.json();
    console.log(data);
    // setMenuCategories(data);
    dispatch(setMenuCategory(data));
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
            Create
          </Button>
        </Box>
        <CreateMenuCategory open={open} setOpen={setOpen} />
        <Box sx={{ display: "flex", gap: 5, flexWrap: "wrap", mt: 5 }}>
          {menuCategories.map((menuCategory) => {
            return (
              <MenuCategoryCard
                key={menuCategory.id}
                icon={<CategoryIcon />}
                href={`menu-category/${menuCategory.id}`}
                title={menuCategory.name}
                subtitle="120 menus"
              />
            );
          })}
        </Box>
      </Box>
    </BackOfficeLayout>
  );
};

export default MenuCategoryPage;
