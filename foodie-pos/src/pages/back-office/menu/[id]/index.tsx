import BackOfficeLayout from "@/components/BackOfficeLayout/BackofficeLayout";
import { useRouter } from "next/router";

const MenuDetail = () => {
  const param = useRouter();
  return <BackOfficeLayout>MenuDetail:{param.query.id}</BackOfficeLayout>;
};

export default MenuDetail;
