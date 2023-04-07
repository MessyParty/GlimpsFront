import React from "react";
import axios from "axios";
import BrandCard from "@/components/BrandCard";

export default function searchResult({ results, params }) {
  return (
    <div>
      {results.length ? (
        results.map((result) => (
          <div key={result.id}>
            <BrandCard
              brandName={result.brandname}
              perfumeName={result.perfumename}
              score={result.score}
            />
          </div>
        ))
      ) : (
        <p>No result found</p>
      )}
    </div>
  );
}

export async function getServerSideProps(context: {
  query;
}): Promise<{ props }> {
  const params = context.query.query as string;
  const { results } = await axios.get(``).then((res) => res.data);

  return { props: { results, params } };
}
