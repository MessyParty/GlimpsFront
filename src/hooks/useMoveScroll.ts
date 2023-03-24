export default function useMoveScroll() {
  const onMoveToElement = (element: HTMLDivElement | null) => {
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return { onMoveToElement };
}
