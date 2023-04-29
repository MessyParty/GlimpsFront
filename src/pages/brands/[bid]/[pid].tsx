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
import Rating from "@/components/Rating";

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
      <StyledSection withImg>
        <div className="item">
          <img src={data?.photos[0].url} alt="perfume image" />
        </div>
        <div className="item">
          <HeaderInfo>
            <div className="title">
              <Typography variant="h2">{data?.brandName}</Typography>
              <Typography variant="h5">{data?.perfumeName}</Typography>
            </div>
          </HeaderInfo>
        </div>
      </StyledSection>
      <StyledDivider position="right" />
      <Spacer y={2} />
      <StyledSection>
        <div className="item">
          <NotesInfo>
            <Typography variant="h5">NOTES</Typography>
            <Spacer />
            {data?.notes.map(({ id, engName, korName }) => (
              <Notes key={id}>
                <Typography>{engName}</Typography>
                <Typography>{korName}</Typography>
              </Notes>
            ))}
          </NotesInfo>
        </div>
        <BlackDivider flexItem orientation="vertical" variant="middle" />
        <div className="item">
          <ScoreInfo>
            <Typography variant="h5">SCORE</Typography>
            <Spacer />
            <Scores>
              <Score>
                <div className="info">
                  <BoldTypo variant="subtitle1">지속력</BoldTypo>
                  <Typography variant="subtitle2">LONGEVITY</Typography>
                </div>
                <Rating
                  precision={0.5}
                  value={data?.longevityRatings}
                  sx={{ fontSize: "45px" }}
                />
              </Score>
              <Score>
                <div className="info">
                  <BoldTypo variant="subtitle1">잔향</BoldTypo>
                  <Typography variant="subtitle2">SILLAGE</Typography>
                </div>
                <Rating
                  precision={0.5}
                  value={data?.sillageRatings}
                  sx={{ fontSize: "45px" }}
                />
              </Score>
              <Spacer y={2} />
              <Score>
                <div className="info">
                  <BoldTypo variant="h6">AVERAGE</BoldTypo>
                  <BoldTypo variant="h6">SCORE</BoldTypo>
                </div>
                <Rating
                  precision={0.5}
                  value={data?.overallRatings}
                  sx={{ fontSize: "50px" }}
                />
              </Score>
            </Scores>
          </ScoreInfo>
        </div>
      </StyledSection>
      <Spacer y={2} />
      <StyledDivider position="left" />
      <Spacer y={2} />
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

type SectionProps = { withImg?: boolean };

const StyledSection = styled.section<SectionProps>`
  display: flex;
  & > .item {
    flex: 1;
    max-height: 500px;
    ${(props) =>
      props.withImg
        ? css`
            & > img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          `
        : null}
  }
`;

const Info = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderInfo = styled(Info)`
  justify-content: space-evenly;
  padding: 1rem;
`;

const NotesInfo = styled(Info)`
  padding: 2rem;
`;

const ScoreInfo = styled(Info)`
  padding: 2rem;
`;

const Notes = styled.div`
  display: flex;
  gap: 10px;
`;

const Scores = styled.div`
  display: flex;
  flex-direction: column;
`;

const Score = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  & > .info {
    display: flex;
    flex-direction: column;
    flex-basis: 30%;
  }
`;

const BlackDivider = styled(Divider)`
  border-color: black;
`;

const BoldTypo = styled(Typography)`
  font-weight: bolder;
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
