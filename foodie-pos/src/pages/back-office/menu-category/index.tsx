import BackOfficeLayout from "@/components/BackOfficeLayout/BackofficeLayout";
import CreateMenuCategory from "@/components/menu-category/CreateMenuCategory";
import MenuCategoryCard from "@/components/menu-category/MenuCategoryCard";
import { useAppSelector } from "@/store/hook";
import CategoryIcon from "@mui/icons-material/Category";
import { Box, Button } from "@mui/material";
import { useState } from "react";
const MenuCategoryPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const menuCategories = useAppSelector((store) => store.menuCategories.items);
  return (
    <BackOfficeLayout>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          onClick={() => {
            setOpen(true);
          }}
          variant="contained"
        >
          Create
        </Button>
      </Box>
      <Box>
        <CreateMenuCategory open={open} setOpen={setOpen} />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 3,
          }}
        >
          {menuCategories.map((menuCategory) => {
            return (
              <MenuCategoryCard
                key={menuCategory.id}
                id={menuCategory.id}
                name={menuCategory.name}
                icon={<CategoryIcon />}
                href={`menu-category/${menuCategory.id}`}
              />
            );
          })}
        </Box>
      </Box>
    </BackOfficeLayout>
  );
};

export default MenuCategoryPage;
