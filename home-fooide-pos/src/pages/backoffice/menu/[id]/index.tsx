import BackOfficeLayout from "@/components/backOfficeLayout";
import { useRouter } from "next/router";

const MenuDetail = () => {
  const param = useRouter();
  console.log(param.query.id);
  return <BackOfficeLayout>MenuDetail</BackOfficeLayout>;
};

export default MenuDetail;
