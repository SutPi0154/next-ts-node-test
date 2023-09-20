import BackOfficeLayout from "@/components/backOfficeLayout";
import { useRouter } from "next/router";

const MenuCategoryDetail = () => {
  const param = useRouter();
  console.log(param.query.id);
  return <BackOfficeLayout>MenuCategoryDetail</BackOfficeLayout>;
};

export default MenuCategoryDetail;
