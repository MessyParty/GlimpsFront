import { GetServerSideProps } from "next";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import BrandDetail from "@/components/Brand/components/BrandDetail";
import TitleBox from "@/components/TitleBox";
import { getPerfume } from "@/apis/perfume";

export const DetailPage = () => {
  return (
    <>
      <TitleBox title="brandName" subtitle="brandNameKr" />
      <BrandDetail />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
