import { GetServerSideProps } from "next";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import BrandDetail from "@/components/Brand/components/BrandDetail";
import styled from "@emotion/styled";

export const DetailPage = () => {
  return (
    <>
      <BrandTitleBox>
        <p className="brand-en">brandName</p>
        <p className="brand-kr">brandNameKr</p>
      </BrandTitleBox>
      <BrandDetail />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { pid } = params as { pid: string };
  const queryClient = new QueryClient();

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const BrandTitleBox = styled.div`
  width: 330px;
  padding: 2rem 0;
  margin: 2.5rem 0;
  border-top: 10px solid #000;
  border-bottom: 10px solid #000;

  & > .brand-en {
    font-size: 30px;
    font-weight: bold;
  }

  & > .brand-kr {
    font-size: 24px;
  }
`;
