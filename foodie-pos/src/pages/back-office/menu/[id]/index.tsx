import BackOfficeLayout from "@/components/BackOfficeLayout/BackofficeLayout";
import { useAppSelector } from "@/store/hook";
import { useRouter } from "next/router";

const MenuDetail = () => {
  const menus = useAppSelector((state) => state.menus.items);
  const param = useRouter();
  const menuId = param.query.id;
  const menu = menus.find((menu) => menu.id === Number(menuId));
  console.log(menu);
  if (!menu) return null;
  return <BackOfficeLayout>MenuDetail:{param.query.id}</BackOfficeLayout>;
};

export default MenuDetail;
