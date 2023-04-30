import React from "react";
import styled from "@emotion/styled";

import useInfiniteScroll from "@/hooks/queries/useInfiniteScroll";
import useObserver from "@/hooks/useObserver";
import { useHandleScroll } from "@/hooks/useHandleScroll";

import BrandCard from "@/components/BrandCard";
import TitleBox from "@/components/TitleBox";

export default function BrandDetail({ brandName }): JSX.Element {
  const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteScroll(brandName);

  useHandleScroll({ fetchNextPage, hasNextPage, isFetchingNextPage });

  const observerElement = useObserver(fetchNextPage, hasNextPage);

  return (
    <>
      {isSuccess &&
        data?.pages.map((page, i) => (
          <div key={i}>
            {page.content?.map((item, i) => (
              <React.Fragment key={i}>
                <TitleBox
                  title={`${item.brandName}`.toUpperCase()}
                  subtitle={item.brandNameKor}
                />
              </React.Fragment>
            ))}
            {page.content?.map((item, i) => (
              <BrandBox key={i}>
                <BrandCard
                  brandName={item.brandName}
                  perfumeName={item.perfumeName}
                  score={item.overallRatings}
                  imgSrc={item.photos[0].url}
                />
              </BrandBox>
            ))}
          </div>
        ))}
      <div className="loader" ref={observerElement}>
        {isFetchingNextPage && hasNextPage ? "Loading..." : "No search left"}
      </div>
    </>
  );
}

const BrandBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
