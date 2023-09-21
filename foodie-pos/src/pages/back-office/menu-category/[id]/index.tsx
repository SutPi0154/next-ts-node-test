import BackOfficeLayout from "@/components/BackOfficeLayout/BackofficeLayout";
import { useAppSelector } from "@/store/hook";
import { useRouter } from "next/router";

const MenuDetail = () => {
  const menuCategories = useAppSelector((state) => state.menuCategories.items);
  const param = useRouter();
  const menuCategoryId = param.query.id;
  const menuCategory = menuCategories.find(
    (item) => item.id === Number(menuCategoryId)
  );
  console.log(menuCategory);
  if (!menuCategory?.name) return null;
  return <BackOfficeLayout>{menuCategory?.name}</BackOfficeLayout>;
};

export default MenuDetail;
