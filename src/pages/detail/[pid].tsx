import { GetServerSideProps } from "next";
import { QueryClient, dehydrate } from "@tanstack/react-query";

const DetailPage = () => {};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { pid } = params as { pid: string };
  const queryClient = new QueryClient();

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
