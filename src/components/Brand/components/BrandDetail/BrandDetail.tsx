import useInfiniteScroll from "@/hooks/queries/useInfiniteScroll";
import useObserver from "@/hooks/useObserver";
import { useHandleScroll } from "@/hooks/useHandleScroll";
import BrandCard from "@/components/BrandCard";
import TitleBox from "@/components/TitleBox";

export default function BrandDetail({ brandName }): JSX.Element {
  const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteScroll(brandName);

  console.log("page:", brandName);
  useHandleScroll({ fetchNextPage, hasNextPage, isFetchingNextPage });

  const observerElement = useObserver(fetchNextPage, hasNextPage);

  return (
    <>
      <TitleBox title={`${brandName}`.toUpperCase()} subtitle="brandNameKr" />
      {isSuccess &&
        data?.pages.map((page, i) => (
          <div key={i}>
            {page?.length ? (
              <BrandCard results={page.props.items} />
            ) : (
              <p>No result found</p>
            )}
          </div>
        ))}
      <div className="loader" ref={observerElement}>
        {isFetchingNextPage && hasNextPage ? "Loading..." : "No search left"}
      </div>
    </>
  );
}
