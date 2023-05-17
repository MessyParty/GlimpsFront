import React from "react";
import TitleBox from "@/components/TitleBox";
import styled from "@emotion/styled";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";

import { getBestPerfume } from "@/apis/perfume";
import useBestPerfume from "@/hooks/queries/useBestPerfume";
import BrandCard from "@/components/BrandCard";

const DEFAULT_IMG =
  "https://www.trndf.com/news/data/20190709/p1065591406141189_714_thum.jpg";

export default function BestPage() {
  const { data: bestData } = useBestPerfume(7);
  return (
    <div>
      <TitleBox title="BEST" subtitle="PERFUMES" />
      <BrandBox>
        {bestData
          ? bestData.map(
              ({ brandName, perfumeName, overallRatings, photos }) => (
                <React.Fragment key={brandName}>
                  <BrandCard
                    brandName={brandName}
                    perfumeName={perfumeName}
                    score={overallRatings}
                    imgSrc={photos[0].url ?? DEFAULT_IMG}
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
