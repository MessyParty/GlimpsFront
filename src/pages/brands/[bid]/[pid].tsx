/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import SortController from "@/components/SortController";
import { getPerfume } from "@/apis/perfume";
import { usePerfume } from "@/hooks/queries";
import { Typography, Divider } from "@mui/material";
import Spacer from "@/components/Spacer";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

type DetailType = {
  pid: string;
  bid: string;
};

const DetailPage = () => {
  const router = useRouter();
  const { pid, bid } = router.query as DetailType;
  const { data } = usePerfume(pid);

  return (
    <PageContainer>
      <HeaderSection>
        <div className="item">
          <img src={data?.photos[0].url} alt="perfume image" />
        </div>
        <div className="item">
          <HeaderInfo>
            <div className="title">
              <Typography variant="h2">{data?.brandName}</Typography>
              <Typography variant="h5">{data?.perfumeName}</Typography>
            </div>
            <div className="notes">
              {data?.notes.map(({ id, engName, korName }) => (
                <Notes key={id}>
                  <Typography>{engName}</Typography>
                  <Typography>{korName}</Typography>
                </Notes>
              ))}
            </div>
          </HeaderInfo>
        </div>
      </HeaderSection>
      <StyledDivider position="right" />
      <Spacer />
    </PageContainer>
  );
};

type StyledDividerProps = {
  position?: "left" | "right";
  width?: string;
};

const StyledDivider = ({
  position = "left",
  width = "30%",
}: StyledDividerProps) => {
  return (
    <div style={{ position: "relative" }}>
      <BlackDivider />
      <Square pos={position} w={width} />
    </div>
  );
};

export default DetailPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { pid, bid } = params as DetailType;
  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: ["perfume", pid],
    queryFn: () => getPerfume(pid),
  });

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
    max-height: 500px;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const HeaderInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem;
`;

const Notes = styled.div`
  display: flex;
  gap: 10px;
`;

const BlackDivider = styled(Divider)`
  border-color: black;
`;

const Square = styled.div<{ pos: "left" | "right"; w: string }>`
  height: 10px;
  background-color: black;
  position: absolute;
  width: ${(props) => props.w};
  top: 50%;
  transform: translateY(-50%);
  ${(props) =>
    props.pos === "left"
      ? css`
          left: 0px;
        `
      : css`
          right: 0px;
        `}
`;
