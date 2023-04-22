import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { getSearch } from "@/apis/search";
import BrandCard from "@/components/BrandCard";
import useSearch from "@/hooks/queries/useSearch";

export default function Search() {
  const router = useRouter();
  const { brand, perfume, notes } = router.query;

  const { data: results, isLoading } = useSearch(
    brand ? "brand" : perfume ? "perfume" : "notes",
    brand || perfume || notes,
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (results && results.length > 0) {
    return (
      <>
        {results.map((result) => (
          <BrandCard
            key={result.id}
            brandName={result.brandName}
            perfumeName={result.perfumeName}
            imgSrc={result.imgSrc}
            score={result.score}
          />
        ))}
      </>
    );
  }

  return (
    <>
      <h1>검색 결과가 없습니다.</h1>
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
