import React from "react";
import BrandCard from "@/components/BrandCard";
import TitleBox from "@/components/TitleBox";
import useBestPerfume from "@/hooks/queries/useBestPerfume";
import styled from "@emotion/styled";
import { PerfumeData } from "@root/__mocks__/PerfumeData";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";

import { getBestPerfume } from "@/apis/perfume";

const DEFAULT_IMG =
  "https://www.trndf.com/news/data/20190709/p1065591406141189_714_thum.jpg";

export default function BestPage() {
  const { data: bestData } = useBestPerfume(7);
  return (
    <div>
      <TitleBox title="BEST" subtitle="PERFUMES" />
      <BrandBox>
        {/* 테스트용 */}
        {PerfumeData.map((perfume) => (
          <React.Fragment key={perfume.id}>
            <BrandCard
              brandName={perfume.brandName}
              perfumeName={perfume.perfumeName}
              score={perfume.score}
              imgSrc={perfume.imgSrc}
            />
          </React.Fragment>
        ))}
        {/* 실제 데이터 들어가는 곳 */}
        {bestData
          ? bestData.map(
              ({ brandName, perfumeName, overallRatings, photoUrls }) => (
                <React.Fragment key={brandName}>
                  <BrandCard
                    brandName={brandName}
                    perfumeName={perfumeName}
                    score={overallRatings}
                    imgSrc={photoUrls[0] ?? DEFAULT_IMG}
                  />
                </React.Fragment>
              ),
            )
          : null}
      </BrandBox>
    </div>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await Promise.allSettled([
    queryClient.prefetchQuery({
      queryKey: ["perfume", "best"],
      queryFn: () => getBestPerfume(7),
    }),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const BrandBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  & div:first-child {
    grid-column: span 2;
  }
  & div:last-child {
    grid-column: span 2;
  }
  margin-bottom: 5rem;
`;
