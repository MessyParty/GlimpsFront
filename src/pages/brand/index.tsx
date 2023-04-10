import Brand from "@/components/Brand";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { getBrand } from "@/apis/brand";

export default function BrandPage() {
  return <Brand />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await Promise.allSettled([
    queryClient.prefetchQuery({
      queryKey: ["brand"],
      queryFn: () => getBrand(),
    }),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
