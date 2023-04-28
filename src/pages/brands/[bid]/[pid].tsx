/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import SortController from "@/components/SortController";
import styled from "@emotion/styled";

type DetailType = {
  pid: string;
  bid: string;
};

const DetailPage = () => {
  const router = useRouter();
  const { pid, bid } = router.query as DetailType;

  return (
    <PageContainer>
      <HeaderSection>
        <div className="item">
          <img src="" alt="perfume image" />
        </div>
        <div className="item"></div>
      </HeaderSection>
    </PageContainer>
  );
};

export default DetailPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { pid, bid } = params as DetailType;
  const queryClient = new QueryClient();

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderSection = styled.section`
  display: flex;
  & > .item {
    flex-basis: 50%;
  }
`;
