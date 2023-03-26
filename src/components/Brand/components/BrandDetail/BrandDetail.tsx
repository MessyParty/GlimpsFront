import useObserver from "@/hooks/useObserver";
import { useHandleScroll } from "@/hooks/useHandleScroll";
import useInfiniteScroll from "@/hooks/queries/useInfiniteScroll";

export default function BrandDetail(): JSX.Element {
  const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteScroll();

  useHandleScroll({ fetchNextPage, hasNextPage, isFetchingNextPage });

  const observerElement = useObserver(fetchNextPage, hasNextPage);

  return (
    <div>
      {isSuccess &&
        data?.pages.map((page, i) => (
          <div key={i}>
            {page?.length ? (
              <p>data</p>
            ) : (
              // <BrandCard results={page.props.items} />
              <p>No result found</p>
            )}
          </div>
        ))}
      <div className="loader" ref={observerElement}>
        {isFetchingNextPage && hasNextPage ? "Loading..." : "No search left"}
      </div>
    </div>
  );
}
