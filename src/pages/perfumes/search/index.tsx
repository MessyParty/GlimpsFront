import { useState } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { getSearch } from "@/apis/search";
import BrandCard from "@/components/BrandCard";
import useSearch from "@/hooks/queries/useSearch";
import SortController from "@/components/SortController";

export default function Search() {
  const router = useRouter();
  const { brand, perfume, notes } = router.query;

  const { data: results, isLoading } = useSearch(
    brand ? "brand" : perfume ? "perfume" : "notes",
    brand || perfume || notes,
  );
  const [order, setOrder] = useState<"DATE" | "HEARTS_COUNT">("DATE");

  console.log(results);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SortControllerContainer>
        <SortController orderCb={setOrder} />
      </SortControllerContainer>
      <BrandBox>
        {results ? (
          results?.content.map((result) => (
            <BrandCard
              key={result.brandId}
              brandName={result.brandName}
              perfumeName={result.perfumeName}
              imgSrc={result.photos[0].url}
              score={result.overallRatings}
            />
          ))
        ) : (
          <h1>검색 결과가 없습니다.</h1>
        )}
      </BrandBox>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { brand, perfume, notes } = context.query;
  const option = brand ? "brand" : perfume ? "perfume" : "notes";
  const keyword = brand || perfume || notes;
  const results = await getSearch(option, keyword);
  return {
    props: { results },
  };
};

const BrandBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const SortControllerContainer = styled.div`
  margin: 1rem 0;
`;
