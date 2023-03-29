import { useRef } from "react";

export default function useMoveScroll() {
  const targetRef = useRef<HTMLDivElement>(null);

  const onMoveToElement = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return { targetRef, onMoveToElement };
}
